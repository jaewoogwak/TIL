# DOM이란 무엇인가

우리가 마주하는 웹 브라우저는 HTML 문서이다.

HTML 태그들이 구조를 이루고 있다.

DOM(Document Object Model)은 HTML 문서의 각 태그들을 **객체들의 집합**으로 표현하며 자바스크립트가 이 객체들의 집합에 접근함으로써 요소들을 조작 가능하게 하는 방법이다.

# document 객체

`document`객체는 아주 많은 메서드를 가지고 있다.

그중에 `document.createElement()` 메서드는 지정한 태그 이름에 상응하는 HTML 요소를 만들어서 반환한다.

```javascript
let tag = document.createElement("div")
console.log(tag);
```
현재 페이지에서 개발자 도구를 열어서 콘솔 창에 위의 코드를 붙여넣고 실행시키면 HTML 요소 `<div></div>`를 반환하는 것을 확인할 수 있다.

자바스크립트를 사용한 DOM 요소 생성으로 **자바스크립트로 표현된 것이 아닌, HTML 요소를 생성하였다**.

이 과정에서 자바스크립트와 HTML 간의 상호 작용이 일어났다.

`document`라는 하나의 인터페이스로 자바스크립트와 HTML 간의 대화가 가능해진다.


DOM은 유저가 HTML 문서를 조작할 수 있도록 조작 가능한 방법을 제공한다.

그 방법은 HTML 요소를 객체들의 집합으로 표현함으로써 자바스크립트로 접근 및 조작 가능하게 하는 것이다.
