# React Native

## styles

### All components are flex view in RN

### RN에서 Flex direction의 default는 column (Web에서 default는 row)

#### row로 바꾸려면 -> `flexDirection : row`

#### RN에서 모든 레이아웃은 flex로 만든다

#### width, height 사용 X

#### flex는 비율로 사용 -> `flex : 1`

#### flex를 적용하고자 하는 컴포넌트를 감싸고 있는 '부모 컴포넌트'의 style 속성에도

#### 반드시 `flex : 1`을 적용해주어야 한다.

#### 부모 컴포넌트의 flex 값이 기준이 되어 자식 컴포넌트의 flex 비율이 정해진다.

#### ```

<View style={{ flex: 1 }}>
<View style={{ flex: 1, backgroundColor: "tomato" }}></View>
<View style={{ flex: 5, backgroundColor: "skyblue" }}></View>
<View style={{ flex: 1, backgroundColor: "orange" }}></View>
</View>

#### ```

#### ScrollView에서 style을 적용해주고 싶으면 `props style`말고 `container style`을 써주자

#### ScrollView에는 flex 속성을 줄 필요 x 왜냐하면 ScrollView는 Screen보다 크기 때문.

#### Dimensions : 스크린 크기 알수있다

#### pagingEnabled : 페이지 넘기는걸 끈끈하게 만들어쥼
