# Pure function


## 순수 함수의 원칙
1. 순수 함수는 내부에서 오직 자기 할 일만 한다
- 함수가 호출되기 전에 존재했던 객체, 변수를 절대 변경하지 않는다
2. 순수 함수는 동일한 입력에 대해 항상 동일한 결과를 반환해야한다.


아래 함수는 입력으로 주어지는 `number`가 같다면 100번, 1000번의 함수 호출에도 동일한 결과를 보일 것이다.

```javascript
function double(number) {
  return 2 * number;
}
```

## 리액트 컨셉

리액트는 이러한 개념을 바탕으로 설계되었다.

리액트 컴포넌트는 동일한 입력에 대해 항상 동일한 JSX를 반환해야한다.

아래 예시는 동일한 `drinkers`라면 항상 같은 `<li>Boil {drinkers} cups of milk.</li>`의 JSX를 반환한다.

```javascript
function Recipe({ drinkers }) {
  return (
    <ol>    
      <li>Boil {drinkers} cups of milk.</li>
      <li>Add {2 * drinkers} spoons of masala spices.</li>
      <li>Remove from heat, and add {drinkers} spoons of tea.</li>
    </ol>
  );
}

export default function App() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For one</h2> 
      <Recipe drinkers={1} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}
```

`drinkers`가 1이라면 `<li>Boil 1 cups of milk.</li>`

4라면 `<li>Boil 4 cups of milk.</li>`일 것이다.

역시 100번, 1000번 함수를 호출해도 동일한 JSX를 반환한다.

## side effect 방지하기

리액트 렌더링 프로세스는 항상 순수해야한다. 

컴포넌트는 JSX만 반환해야하며 컴포넌트 내부에서 컴포넌트 렌더링 전에 존재했던 객체나 변수를 변경하면 안된다.
