## Redux Toolkit
Redux를 더 쉽게 사용할 수 있게 해줌

-> Immer 라이브러리 등 

## Redux에서 불변성을 지켜야 하는 이유
리덕스에서는 반드시 불변성을 지켜야 한다.

리듀서 함수에서 상태를 업데이트 할 때, 기존 상태(state)와 액션(action)으로 업데이트가 진행된다.

이때 기존 상태를 직접 변경하면 안된다.

기존 상태의 복사본을 만들고, 복사본을 변경해서 상태 업데이트를 해야한다.

불변성을 지키지 않을 경우 
- UI가 최신 상태값을 기반으로 렌더링 되지 않을 수 있다
- Redux DevTools의 시간여행 디버깅 기능을 사용할 수 없다
- 리덕스를 관통하는 개념인 "상태가 예측 가능한 방식으로 업데이트 되는 것"을 위반한다 
- : 상태가 업데이트 된 이유와 방법을 이해하기 어렵게 만듦


### Immer
불변성을 지키면서 상태를 업데이트 하려면 `spread` 연산자 등 기존 값을 기반으로 새로운 값을 리턴하는 방법을 택해야 한다.

리덕스에서도 불변성을 반드시 지켜야하는데, 리듀서 함수에서 상태를 변경할 때 불편함을 느끼게 된다.

`spread` 연산자로 객체를 가져오면 depth 1까지만 표현된다. 

다음과 같이 코드 길이가 길어지게 된다.

```Javascript
function handwrittenReducer(state, action) {
  return {
    ...state,
    first: {
      ...state.first,
      second: {
        ...state.first.second,
        [action.someId]: {
          ...state.first.second[action.someId],
          fourth: action.someValue
        }
      }
    }
  }
}
```
그러나 리덕스는 `Immer` 라이브러리를 사용해서 사용자가 상태를 직접 변경해도 `Immer`는 변경 사항을 추적해서 

이전에 `spread` 연산자를 사용하는 등 불변성을 지키는 방식으로 작성했던 것처럼

안전하게 업데이트 된 값을 리턴한다.

```Javascript
function reducerWithImmer(state, action) {
  state.first.second[action.someId].fourth = action.someValue
}
```

이러한 `Immer`는 오직 `createSlice`와 `createReducer` 안에서만 적용되며, 

외부에서 상태를 직접 변경할 경우 `Immer`의 마법효력이 없어질 것이다.


## useSelector Hook
useSelector Hook은 `import { useSelector } from "react-redux";`로 가져올 수 있다.

`useSelector`은 리덕스 스토어의 `state`에 접근한다.

`useSelector`에 전달되는 `state` 값은 리덕스 스토어에 저장된 <strong>상태 트리(state tree)</strong>이다.

따라서 `state`의 `.` dot 연산자로 특정 상태에 접근할 수 있다. 즉, 원하는 상태값을 가져올 수 있다.



