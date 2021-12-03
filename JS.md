# JS

## Velopert's Modern React

### filter

#### 배열의 항목 제거에서, `filter`를 활용해 `불변성`을 지키면서 특정 원소를 삭제할 수 있다.

#### ```javascript const onRemove = id => { setUserList(users.filter(user => user.id !== id));} ```