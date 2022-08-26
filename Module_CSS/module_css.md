# CSS Module

클래스 이름을 고유한 값으로 생성해서 컴포넌트에 적용할 스타일 클래스 이름이 중복되지 않게 하는 기술이다.

모듈 단위로 CSS 클래스 이름을 지정하면 모듈마다 클래스 이름이 독립성을 가지게 된다.

## 스타일시트 생성하기

`.module.css` 파일을 생성한다.

예를 들어, `CheckBox` 컴포넌트의 스타일시트를 생성하려면 `CheckBox.module.css`와 같이 파일명을 작성하면 된다.

## 장점

- 클래스 이름이 중복될 일이 없다
- 컴포넌트 단위로 스타일을 적용할 때 아주 유용 (하나의 컴포넌트에 하나의 스타일시트) 


## 사용법

```css
// CheckBox.module.css
.checkbox {
  display: flex;
  align-items: center;
}

.checkbox label {
  cursor: pointer;
}

```
위의 스타일 시트를 리액트 컴포넌트에서 사용하려면 다음과 같이 임포트한다.

```import styles from './CheckBox.module.css';```

그리고 Dot 연산자(.)로 자바스크립트 객체의 프로퍼티에 접근하듯이 클래스 이름을 호출하면 된다.

```javascript
// CheckBox.js
import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from './CheckBox.module.css';

function CheckBox({ children, checked, ...rest }) {
  return (
    <div className={styles.checkbox}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={styles.icon}>
          {checked ? (
            <MdCheckBox className={styles.checked} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default CheckBox;
```

### 클래스 이름에 하이픈이 들어간다면..

```styles['my-class']```


### 여러 개의 클래스 이름 적용하기

백틱을 사용한다.

``` `${styles.one} ${styles.two}` ```


### 조건부 스타일링

```${styles.one} ${condition ? styles.two : ''}```
