# useMemo는 객체 비교 연산에서 빛을 발한다

컴포넌트 리렌더링 시 일반 원시 타입 변수는 똑같은 값이 담기지만,

객체 타입 변수는 주솟값이 담기기 때문에 `===` 연산에서 `false`를 리턴하며 다르다고 판단한다.

이때 `useEffect`에서 `deps`로 객체가 담긴 변수를 주게 되면 리렌더링 됐을 때

객체 내용이 변하지 않더라도 렌더링 전과 후의 변수에 저장된 객체의 주솟값이 다르기 때문에

결과적으로 `deps`에 담긴 `location`은 리액트 내부에서 다르다고 판단한다.

이 판단은 쓸모없는 `useEffect`의 호출을 야기한다.

이 문제를 useMemo를 이용하여 해결한다.


```javascript
// useMemo 사용 전 : location 객체를 수정하지 않아도 useEffect를 매번 호출
import { useMemo, useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = { country: isKorea ? "한국" : "일본" };

  useEffect(() => {
    console.log("useEffect... 호출");
    // 뭔가 오래 걸리는 작업
  }, [location]);

  return (
    <header className="App-header">
      <h2>하루에 몇 끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />

      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>Update</button>
    </header>
  );
}

export default App;


```

```javascript
// useMemo 사용 후 : useEffect를 호출하지 않음. (처음 렌더링 때만 호출)
import { useMemo, useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return { country: isKorea ? "한국" : "일본" };
  }, [isKorea]);

  useEffect(() => {
    console.log("useEffect... 호출");
    // 뭔가 오래 걸리는 작업
  }, [location]);

  return (
    <header className="App-header">
      <h2>하루에 몇 끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />

      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>Update</button>
    </header>
  );
}

export default App;

```
