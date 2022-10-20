# React.StrictMode

리액트 엄격모드는 순수하지 않은 함수를 찾아내기 위해 존재한다.

리액트 애플리케이션을 실행하고 `console.log`를 만들어서 콘솔창을 확인해보자.


```javascript
function App() {
  console.log("I will be seen!")
  return (...);
}
```

![image](https://user-images.githubusercontent.com/62415600/197004176-f14d48ed-68ba-491f-9a2c-a0d83c24e662.png)


순수하지 않은 함수라면 같은 입력에 대해 **같은 JSX를 반환하지 않을테니** 각 실행마다 다른 값을 보여줄 것이다.


```javascript
let cupOfCoffee = 0;

function oneMoreCoffee() {
  cupOfCoffee += 1;
}

function App() {
  oneMoreCoffee()
  console.log('cup of coffee 🫖', cupOfCoffee);
  return (
    <h1>Is this pure function?</h1>
  );
}

export default App;

```

![image](https://user-images.githubusercontent.com/62415600/197005675-40102c27-a5e6-4188-85d4-46c6f01b94eb.png)


## 어떻게 사용하지?

`React.StrictMode`는 기본적으로 루트 컴포넌트에 래핑되어 제공된다.

```javascript
<React.StrictMode>
    <App />
</React.StrictMode> 
```

## 결론

사실 이전까지는 엄격모드가 왜 콘솔창에 두 번 반복해서 보여주는지 몰랐다.

그러나 이유는 간단했다. 리액트를 아우르는 개념인 순수함수임을 확인하기 위해서이다.

순수함수가 아니라면 각 함수의 동작마다 다른 결과값을 보일테니 말이다.





