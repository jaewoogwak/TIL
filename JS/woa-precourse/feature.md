# 바닐라 자바스크립트를 리액트 스타일로 코딩하기

## index.html
```html
<body>
    <div class="app">
    <h1>Vanilla JS App</h1>
    </div>
    <script src="./src/index.js" type="module"></script>
</body>

`script` 태그의 `type`을 `module`로 지정함으로써 각 파일을 모듈화하고 독립적인 스코프를 갖게 한다. 
```
## App.js
```javascript
export default function App({ $target }) {
    $target.innerHTML ='';   
    new SearchInput({$target}).render()
}
```
`App.js`에는 컴포넌트가 들어간다.

`$target`은 해당 컴포넌트가 렌더링될 DOM 요소이다. 

아래에서 확인하겠지만 `App.js`의 `$target`에는 `<div class='app'></div>`의 DOM 요소가 들어간다.

컴포넌트는 `new` 키워드를 붙여서 선언한다. (`type=module` 때문에 각 파일이 export 될 때 클래스로 변환되기 때문이다.)

`$target.innerHTML=''`은 `index.html`의 `<div class='app'/>` 을 초기화한다.

cf.) 변수 앞에 `$`를 붙이면 DOM 요소가 담긴 변수라는 의미이다.

## index.js
```javascript
import App from "./App.js";

new App({ $target : document.querySelector('.app')})
```

