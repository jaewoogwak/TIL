# 타입스크립트에서 인터페이스와 클래스 사용하기

타입스크립트에서 클래스 사용은 `인터페이스(interface)`를 구현해서 사용한다.

인터페이스는 클래스에서 구현부를 떼어낸 것이다.

인터페이스를 통해 어떠한 객체가 인터페이스에서 정의된 프로퍼티나 메서드를 가지고 있다고 설명한다. 이때 프로퍼티나 메서드의 이름과 콜론(:)과 타입으로 클래스 구현을 설명한다.

그리고 실질적인 구현 부분은 클래스에서 작성해준다.

아래 코드를 보자. `Shape` 인터페이스를 구현하는 클래스는 반드시 `getArea()` 메서드를 구현해야한다고 정의되어있다.
물론 `getArea()` 메서드는 `number` 타입 값을 리턴한다는 뜻도 가진다.

```javascript
interface Shape {
  getArea(): number;
}

class Rect implements Shape {
  width : number;
  height: number;
  constructor(width, height) {
    this.width  = width;
    this.height = height;
  }
} // error: Class 'Rect' incorrectly implements interface 'Shape'. Property 'getArea' is missing in type 'Rect'.
```
위 코드는 에러를 발생시키는데, `Shape` 인터페이스에서 정의한 `getArea()` 메서드가 `Rect` 클래스에서 구현되어 있지 않기 때문이다.

이렇게 타입스크립트에서는 인터페이스를 활용하여 클래스가 어떻게 구현되어질 것인지 설명할 수 있다.

추가로 타입스크립트로 작성한 클래스 내부에서는 `width : number; height: number;`와 같이 프로퍼티에 대해서 명시적으로 타입 지정을 해주어야 한다.

이러한 타입 지정을 일일히 해주는 것이 귀찮다면 생성자(constructor)의 파라미터 부분에 `public` 또는 `private` accessor를 붙여주면 하나하나 설정해주지 않아도 된다.

```javascript
// Shape 라는 interface 를 선언합니다.
interface Shape {
  getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape {
  // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
  constructor(public radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수를 구현합니다.
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

```

## Indexable

자바스크립트에서 객체의 프로퍼티에 접근하는 방법은 두 가지다.

Dot 연산자(.)로 접근하거나, 대괄호 연산자([])로 접근하는 것이다.

후자는 객체의 프로퍼티에 동적으로 접근할 때 사용한다.

아래 코드는 자바스크립트 파일에서 에러없이 작동한다. 그러나 타입스크립트로 작성한 파일에서는 에러가 발생한다.

```javascript
const dict = {
  foo: 1,
  bar: 2
};

Object.keys(dict)
.forEach(k => console.log(dict[k]));
```

에러 원인을 보자면 단순하게 보면 타입스크립트는 정적 언어이기 때문에 당연히 객체 프로퍼티에 동적으로 접근하는 것도 허용하지 않을 것이다.

객체 프로퍼티에 접근할 때 어떤 프로퍼티에 접근하여 어떤 타입의 값을 리턴하는지 알 수 없기 때문에 에러를 발생시킨다.

해결 방법은 두 가지다.
1. `noImplicitAny` 값을 `false`로 바꾸기
2. 객체를 _Indexable_ 하기 만들기

객체를 Indexable 하게 만드려면 인덱스 시그니처(Index Signature)를 사용한다.

```javascript
interface Indexable {
  [key: string]: any;
}

const dict: Indexable = {
  foo: 1,
  bar: 2
};

Object.keys(dict)
.forEach(k => console.log(dict[k])); // OK
```

위와 같이 `dict` 객체를 Indexable하게 만들어주면, 해당 객체의 프로퍼티가 `string` 타입일 경우 리턴값은 항상 `any`인 것을 명시적으로 나타내는 것이다.



