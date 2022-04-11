## Redux란 무엇인가
Redux는 액션이라는 이벤트를 사용하여 애플리케이션의 상태를 관리하고 업데이트 하기 위한 패턴 및 라이브러리다.

-> 상태가 예측 가능한 방식으로만 업데이트 될 수 있도록 보장하는 규칙 사용

-> 앱 전체에서 사용하는 상태에 대한 중앙 저장소 역할

## 왜 Redux를 사용해야 하나
Redux는 앱의 많은 부분에 필요한 전역 상태를 관리하는 데 도움이 된다.

-> Redux에서 제공하는 패턴과 도구를 사용하면 앱의 상태가 언제, 어디서, 왜, 어떻게 업데이트 되는지 알 수 있다

## Redux는 one-way data flow
Actions -> State -> View -> Actions ..

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






