## Redux란 무엇인가
Redux는 액션이라는 이벤트를 사용하여 애플리케이션의 상태를 관리하고 업데이트 하기 위한 패턴 및 라이브러리다.

-> 상태가 예측 가능한 방식으로만 업데이트 될 수 있도록 보장하는 규칙 사용

-> 앱 전체에서 사용하는 상태에 대한 중앙 저장소 역할

## 왜 Redux를 사용해야 하나
Redux는 앱의 많은 부분에 필요한 전역 상태를 관리하는 데 도움이 된다.

-> Redux에서 제공하는 패턴과 도구를 사용하면 앱의 상태가 언제, 어디서, 왜, 어떻게 업데이트 되는지 알 수 있다

## Redux는 one-way data flow
Actions -> State -> View -> Actions ..
![onewaydataflow](https://ko.redux.js.org/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png)

### Actions(액션)
액션은 `type`을 필드로 가지는 자바스크립트 객체다.

액션은 애플리케이션에서 어떤 일이 일어났을 때를 설명하는 이벤트다.

`type` 필드에는 문자열이 들어가야하며 액션을 나타내는 이름을 주어야 한다. ex) `todos/todoAdded, domain/eventName`

액션 객체에는 발생한 상황에 대한 추가 정보를 나타내는 다른 필드를 정의할 수 있다.

그런 정보를 `payload`라는 필드에 넣는다.

```Javascript
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```

### Action Creators(액션 생성자)
액션 생성자는 액션 객체를 생성하고 리턴하는 함수다.

액션 생성자를 사용함으로써 액션 객체를 일일이 작성해줄 필요가 없다.

```Javascript
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}
```

### Reducer(리듀서)
리듀서는 현재 상태(state)와 액션(action) 객체를 받고 업데이트가 필요한 경우, 현재 상태를 기반으로 새로운 상태를 리턴하는 함수다.

`(state, action) => newState)`

리듀서는 다음 규칙을 따라야 한다.

- state와 action을 기반으로 새로운 state 값만 계산해야함
- 기존 state를 수정할 수 없음
- 기존 state를 복사하고 복사된 값을 변경하는 Immutability를 지켜야함
- 비동기 로직 같은 side effects를 수행하면 안됨

리듀서의 실행은 다음 단계를 거친다.


1. 리듀서가 액션에 관심이 있는가(새로운 상태를 반환해야 하는가)

   1.1. 그렇다면 상태의 복사본을 만들고, 복사본으로 새로운 상태 값을 만들고 리턴

2. 그렇지 않다면 현재 상태를 변경하지 않고 리턴

```Javascript
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/increment') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    }
  }
  // otherwise return the existing state unchanged
  return state
}
```

### Store(스토어)
리덕스 의 현재 상태는 스토어라는 객체에 있다.

스토어는 리듀서를 전달하여 생성되고 현재 상태 값을 반환하는 메서드를 갖는다.

```Javascript
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}
```
### Dispatch(디스패치)
Redux store는 `dispatch`라는 메서드를 가진다.

상태를 업데이트하는 단 하나의 방법이 `store.dispatch`를 호출하여 액션 객체를 전달하는 것이다.

스토어는 리듀서를 실행하고 내부에 새 상태값을 저장한다.

또한 `getState()`로 업데이트 된 값을 호출할 수 있다.

```Javascript
store.dispatch({ type: 'counter/increment' })

console.log(store.getState())
// {value: 1}
```

액션을 디스패치 하는 것을 이벤트를 트리거하는 것으로 생각할 수 있다.

어떤 일이 발생했을 때, 우리는 스토어가 이것을 알기를 원한다. 리듀서는 이벤트리스너처럼 행동하고 상태를 지켜보다가 필요에 따라 업데이트 한다.

```Javscript
const increment = () => {
  return {
    type: 'counter/increment'
  }
}

store.dispatch(increment())

console.log(store.getState())
// {value: 2}
```

### Redux 애플리케이션 데이터
- 상태는 특정 시점의 앱 상태를 나타냄
- UI는 해당 상태를 기반으로 렌더링됨
- 사용자가 버튼을 클릭하는 것과 같은 일(action)이 발생하면 상황에 따라 상태가 업데이트 됨(dispatch)
- UI는 새 상태를 기반으로 다시 렌더링 됨(reducer(state, action){...})

![imgae](https://ko.redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)




