# TypeScript를 시작하는 나

## 타입스크립트 세팅
1.	Nodejs 설치
2.	Yarn global add typescript (npm install -g typescript)
3.	.ts 파일 만들기
4.	Tsconfig.json 파일 만들기 (ts -> js 컴파일할 때 사용할 옵션 설정하는 파일)
5.	`tsc – w` : 따로 컴파일 명령어를 입력하지 않아도 자동으로 컴파일 해주는 명령어


## 타입스크립트의 장점

- JS와 달리 코드 작성 과정에서 코드를 실시간으로 디버깅할 수 있다.
- 에러 메시지 퀄리티가 높아서 어떤 에러가 발생했는지 파악하기 수월하다.
- 동적 타입 지정을 하는 자바스크립트의 양날의검 같은 특징을 컴파일 시 타입 체크로 커버할 수 있다.



## Syntax

변수 이름 뒤에 콜론(:)과 타입을 작성함으로써 변수 타입을 지정할 수 있다.

```javascript
let name : string = "Gwak";
```

타입은 자바스크립트에 존재하는 자료형으로 지정할 수 있다.

- string
- number
- boolean
- null
- undefined
- bigint
- []
- {} 등

객체의 타입 지정은 다음과 같이 작성한다.

```javascript
let name : {firstName : string, age? : number} = { firstName : "jaewoo", age : 23 };
```

타입 지정 시 `?` 연산자를 붙여주면 해당 속성이 존재할 수도 있고 안할 수도 있다는 뜻으로 옵션의 의미다.

### Union type

변수에 다양한 타입을 허용하려면 유니온 타입 지정을 한다.

유니온 타입 지정 시 타입 간 구분은 `|` OR 연산자 하나를 사용한다.

```javascript
let id : string | number = "jaewoogwak"; // id = 123 It's Ok 
```

### Tuple type

배열에서 특정 위치에는 반드시 특정 타입의 값이 들어와야한다면 터플 타입을 사용할 수 있다.

```javascript
let id_card : [string, number] = ["gwak", 23];

id_card = ["gwak", 24]; // Ok
id_card = [24, "gwak"]; // error : 'string' 형식은 'number' 형식에 할당할 수 없습니다.
id_card = ["gwak", 24, "happy"]; // error : '[string, number, string]' 형식은 '[string, number]' 형식에 할당할 수 없습니다. 소스에 3개 요소가 있지만, 대상에서 2개만 허용합니다.

```

```javascript
id_card[1].slice(0,2) // error : 'number' 형식에 'slice' 속성이 없습니다.ts(2339)
```
터플 타입을 사용하면 다음과 같은 장점이 존재한다.
- 배열에서 특정 위치에 대해 타입을 명시할 수 있다.
- 배열 크기를 추론하기 때문에 인덱스 범위를 벗어나면 컴파일러가 에러 메시지를 출력한다.

### Interface

`Interface`는 객체의 타입 이름을 지정하는 방법이다.

```javascript
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

let id_card: Person = { firstName: "jaewoo", lastName: "Gwak", age: 23 };
```
`Interface`와 비슷한 기능을 하는 `type`도 존재한다.

둘의 차이점은 [이 글](https://yceffort.kr/2021/03/typescript-interface-vs-type#computed-value%EC%9D%98-%EC%82%AC%EC%9A%A9)을 참고하자.


### Function

함수에도 타입 지정이 가능하다.

```javascript
function greeting(name: string): string {
  return `Hi ${name}!`;
}

console.log(greeting("jaewoo")); // Hi jaewoo!
```

위 예시에서는 파라미터는 `string` 타입 , 리턴 타입도 `string`을 명시해주었다.

## 선언 파일
리액트에서 라이브러리를 많이 사용하는데, 이런 라이브러리는 자바스크립트로 작성된 경우가 많다. 이때 자바스크립트 라이브러리를 사용하는 타입스크립트 프로젝트는 타입 추론을 하기 때문에 타입이 명시되어 있지 않은 자바스크립트 라이브러리는 에러를 일으킨다.

선언 파일이란, 자바스크립트 코드베이스에서 타입스크립트의 형태를 설명하는 파일이다.
선언 파일을 참조함으로써 우리가 사용하는 자바스크립트 코드나 라이브러리가 어떻게 타입 추론을 해야하는지 타입스크립트에게 알려준다.

많은 선언 파일이 존재하는 DefinitelyTyped는 가장 유명한 선언 파일 레포지토리이다. DefinitelyTyped를 사용하고 여기에 포함된 선언 파일을 사용하면 컴파일러의 타입 검증을 통해서 많은 자바스크립트 라이브러리를 타입스크립트 라이브러리인 것처럼 사용할 수 있다.

우리가 사용하는 @types 패키지들이 온 곳이 DefinitelyTyped 저장소이다. 

### Examples

함수의 매개변수로 특정 문자열만 전달받게 할 수 있다.

```javascript
const helloWorld = "Hello World";
let hiWorld = "Hi World"; // this is a string because it is let

// This function only accepts the string literal "Hello World"
declare function allowsOnlyHello(arg: "Hello World");
allowsOnlyHello(helloWorld);
allowsOnlyHello(hiWorld); // error
```

유니온을 활용해서 여러 개의 타입이나 특정한 값인지를 검사할 수 있다.

```javascript
// This lets you declare APIs which use unions to say it
// only accepts a particular literal:

declare function allowsFirstFiveNumbers(arg: 1 | 2 | 3 | 4 | 5);
allowsFirstFiveNumbers(1);
allowsFirstFiveNumbers(10); // error
```


`as const` 키워드로 `const` 객체 내부 프로퍼티가 변하는 것을 막을 수 있다. 

```javascript
// When "as const" is applied to the object, then it becomes
// a object literal which doesn't change instead of a
// mutable object which can.

const myUnchangingUser = {
  name: "Fatma",
} as const;

myUnchangingUser.name = "Raîssa";

```
