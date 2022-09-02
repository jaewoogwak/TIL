# 타입스크립트 알아보기

타입스크립트는 자바스크립트의 상위집합(superset)이다.

![tempImg 10](https://user-images.githubusercontent.com/62415600/188171604-382a66a2-67db-48eb-8752-27d78a8002e7.jpg)

자바스크립트로 작성된 코드가 잘 작동한다면 타입스크립트로 파일 확장자를 변경해도 잘 작동한다.

그러나 모든 자바스크립트는 타입스크립트지만, 모든 타입스크립트가 자바스크립트는 아니다.

## 타입 추론

타입스크립트는 초깃값으로 타입을 추론한다.

```javascript
let city = 'new york ciry';
console.log(city.toUppercase) 
// error : ''toUppercase' 속성이 'string' 형식에 없습니다. 
// 'toUpperCase'을(를) 사용하시겠습니까?
```

타입을 명시하지 않아도 변수에 할당된 초기값을 통해 타입을 추론해낸다. 위의 예시에선 메서드 호출에 오타가 발생했고 타입 체커가 오류를 잡아낸다.

타입 시스템의 목표 중 하나는 **런타임에 오류를 발생시킬 코드를 미리 찾아내는 것**이다.

## 명시적으로 선언하기

```javascript
const states = [
  {name: 'Alabama', capitol: 'Montgomery'},
  {name: 'Alaska',  capitol: 'Juneau'},
  {name: 'Arizona', capitol: 'Phoenix'},
  // ...
];
for (const state of states) {
  console.log(state.capital);
                 // ~~~~~~~ Property 'capital' does not exist on type
                 //         '{ name: string; capitol: string; }'.
                 //         Did you mean 'capitol'?
}
```

위 예시의 반복문 호출에서 `captital`은 `states`의 프로퍼티가 아니다. `capitol`이다.

사실 `capitol`은 오타지만, 타입스크립트는 어느 쪽이 오타인지 판단하지 못한다.

따라서 명시적으로 states를 선언하여 **의도를 분명하게** 해야한다.

```javascript
interface State {
  name: string;
  capital: string;
}
const states: State[] = [
  {name: 'Alabama', capitol: 'Montgomery'},
                 // ~~~~~~~~~~~~~~~~~~~~~
  {name: 'Alaska',  capitol: 'Juneau'},
                 // ~~~~~~~~~~~~~~~~~
  {name: 'Arizona', capitol: 'Phoenix'},
                 // ~~~~~~~~~~~~~~~~~~ Object literal may only specify known
                 //         properties, but 'capitol' does not exist in type
                 //         'State'.  Did you mean to write 'capital'?
  // ...
];
for (const state of states) {
  console.log(state.capital);
}
```

의도를 명확하게 하면 오류가 어디서 발생하는지 더욱 정확하게 찾을 수 있으며, 타입스크립트가 제시하는 해결책도 올바를 것이다.

## 타입스크립트 설정 이해하기

타입스크립트 컴파일러는 매우 많은 설정을 가지고 있다. (거의 100개에 이른다.)

설정을 커맨드라인에서 사용하러면,

`$ tsc --noImplicitAny program.ts`

tsconfig.json 파일로 설정하려면,

```javascript
{
 "compilerOptions": {
    "noImplicitAny": true
  }
}
```

설정 파일 생성은, `$ tsc --init`

### noImplicitAny

noImplicitAny는 변수들이 미리 정의된 타입을 가져야 하는지 여부를 제어한다.

noImplicitAny가 해제되어 있을 때는 다음 코드는 유효하다.

```javascript
// tsConfig: {"noImplicitAny":false}

function add(a, b) {
  return a + b;
}
```

그러나 같은 코드임에도 noImplicitAny가 설정되었다면 오류가 된다.

이 오류는 명시적으로 : any라고 선언하거나 더 분명한 타입을 명시해주면 해결할 수 있다. (그러나 전자는 좋은 방법이 아니다)

```javascript
// tsConfig: {"noImplicitAny":true}

function add(a: number, b: number) {
  return a + b;
}
```

타입스크립트는 타입 정보를 가질 때 가장 효과적이기 때문에, 되도록이면 noImplicitAny를 설정해야한다.

### strictNullChecks

strictNullChecks는 null과 undefined가 모든 타입에서 허용되는지 확인하는 설정이다.

다음은 strictNullChecks가 해제되었을 때 유효한 코드다.

```javascript
// tsConfig: {"noImplicitAny":true,"strictNullChecks":false}

const x: number = null;  // OK, null is a valid number
```

`number` 타입에서 null 사용을 허락한다.

그러나 strictNullChecks를 설정하면 오류가 된다.

```javascript
// tsConfig: {"noImplicitAny":true,"strictNullChecks":true}

const x: number = null;
//    ~ Type 'null' is not assignable to type 'number'
```
null 대신 undefined를 써도 같은 오류가 난다.

strictNullChecks를 설정한채로 null을 허용하려면 의도를 명시적으로 드러냄으로써 오류를 고칠 수 있다.

```javascript
const x : number | null = null; // x is type of number or null
```

strictNullChecks는 null과 undefined 관련 오류를 잡는 데에 많은 도움이 되지만, 코드 작성을 어렵게 한다.

타입스크립트 초보자거나 자바스크립트 코드를 마이그레이션하는 중이라면 설정하지 않아도 괜찮다고한다.

그러나 "undefined는 객체가 아닙니다." 같은 런타임 에러를 방지하기 위해 설정해주는 것이 좋다.

strictNullChecks를 설정하려면 noImplicitAny를 먼저 설정해야한다.

모든 체크를 설정하고 싶으면 strict 설정을 하면 된다.

## 코드 생성과 타입은 관계없다

타입스크립트 컴파일러는 두 가지 역할을 수행한다.

- 최신 타입스크립트/자바스크립트를 브라우저에서 동작할 수 있도록 구버전의 자바스크립트를 트랜스파일(transpile, translate + compile)한다.
- 코드의 타입 오류를 체크한다.

여기서 이 두 가지는 서로 완벽하게 독립적이다.

타입스크립트가 자바스크립트로 변환될 때 코드 내 타입에 영향을 주지 않는다. 또한 자바스크립트 실행 시점에도 타입은 영향을 미치지 않는다.

그래서 **컴파일은 타입 체크와 독립적으로 동작하기 때문에 타입 오류가 있는 코드도 컴파일이 가능하다.**

그러므로 코드에 오류가 있다면 타입 체크에 문제가 있는 것이다.

## 런타임에는 타입 체크, 사용이 불가능하다

```javascript
interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle; // 타입 참조

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) { // 값 참조
                    // ~~~~~~~~~ 'Rectangle' only refers to a type,
                    //           but is being used as a value here
    return shape.width * shape.height;
                    //         ~~~~~~ Property 'height' does not exist
                    //                on type 'Shape'
  } else {
    return shape.width * shape.width;
  }
}
```

런타임에는 타입체크가 불가능하기 때문에, instanceof 체크가 런타임에 일어나고 

Rectangle은 타입이기 때문에 런타임 시점에 아무런 역할을 할 수 없어서 오류가 발생한다.

타입스크립트의 타입은 '제거 가능(erasable)`하다.

**실제로 자바스크립트로 컴파일되는 과정에서 모든 인터페이스, 타입, 타입 구문은 제거된다.**

앞의 코드에서 shape 타입을 명확하게 하려면, 런타임에 타입 정보를 유지하는 방법이 필요하다.

하나의 방법은 `height` 속성이 존재하는지 체크해보는 것이다.

```javascript
interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;
function calculateArea(shape: Shape) {
  if ('height' in shape) {
    shape;  // Type is Rectangle
    return shape.width * shape.height;
  } else {
    shape;  // Type is Square
    return shape.width * shape.width;
  }
}
```

다른 방법으로는 런타임에 접근 가능한 타입 정보를 명시적으로 저장하는 '태그' 기법이다.

```javascript
interface Square {
  kind: 'square'; // value is string
  width: number;
}
interface Rectangle {
  kind: 'rectangle'; // value is string
  height: number;
  width: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape.kind === 'rectangle') {
    shape;  // Type is Rectangle
    return shape.width * shape.height;
  } else {
    shape;  // Type is Square
    return shape.width * shape.width;
  }
}
```

여기서 Shape 타입은 '태그된 유니온(tagged union)'의 한 예이다. 

이 기법은 런타임에 타입 정보를 손쉽게 유지할 수 있기 때문에 타입스크립트에서 흔하게 볼 수 있다.

또한 타입스크립트 타입은 런타임 동작이나 성능에 영향을 주지 않는다.


## 구조적 타이핑

자바스크립트는 덕 타이핑(duck typing) 기반이다.

덕 타이핑이란 객체가 어떤 타입에 부합하는 변수와 메서드를 가질 경우 해당 타입에 속하는 것으로 간주하는 방식이다. 

이것은 덕 테스트(The Duck Test)에서 유래되었는데, 다음과 같은 명제로 정의된다. '만약 어떤 새가 오리처럼 걷고, 헤엄치고, 꽥꽥거리는 소리를 낸다면 나는 그 새를 오리라고 부를 것이다.'

예제를 보자.

```javscript
interface Vector2D {
  x: number;
  y: number;
}
function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}
interface NamedVector {
  name: string;
  x: number;
  y: number;
}
```

NamedVector는 number 타입의 x, y 속성이 있기 때문에 calculateLength 함수로 호출 가능하다. (NamedVector는 Vector2D 속성 타입에 부합하는 속성을 가지고 있으므로 Vector2D로 간주한다)

```javascript
const v: NamedVector = { x: 3, y: 4, name: 'Zee' };
calculateLength(v);  // OK, result is 5
```



















