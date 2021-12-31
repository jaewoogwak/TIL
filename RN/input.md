# React Native

## input

### RN에서의 input은 React의 input과는 다르다.

### 엄밀히 말하면 RN에서는 `TextInput`을 사용한다.

### `TextInput`을 사용할 때 필수 요소 2가지

#### 1. `onChangeText` : React의 `onChange`와 같은 기능.

#### 여기다가 화살표 함수 연결해서 (예: setText(payload) 이런식으로) `TextInput`의 `value`를 변경한다.

#### 2. `onSubmitEditing` : React의 `onSubmit`과 유사함.

#### 1과 마찬가지로 함수 연결해서 `TextInput`의 `value`를 얻는다.

#### 3. `value`는 `useState`로 관리한다.
