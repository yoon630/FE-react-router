# [FE] React Router

### 이번 세션에서는 React Router와 Link, useNavigate, useParams에 대해 다루었습니다.

### 따라서 이번 실습과 과제는 이를 활용해보는 문제들로, 실습 문제 5개로 이루어져 있습니다! 

### 기존의 실습 과제에서 사용된 개념들도 녹아있으니, 이전 개념들도 다시 복기하면서 해결해나가시면 좋을 것 같습니다!

<br/>

# [실습 1번]

모든 페이지들에서 나타나는 Header 컴포넌트를 만들어주세요!
Header 컴포넌트의 기능은 다음과 같습니다!
(Hint : useNavigate를 활용해 보세요!)

1. 뒤로 가기 버튼
2. 메인으로 가기 버튼

<br/>
_src/components/Header.jsx 와 App.js 에서 진행해주시면 됩니다!_

// header 사진

<br/>

# [실습 2번]

Link를 활용하여 Main Page에서 Menu Page로 이동할 수 있도록 해주세요!

<br/>
_src/pages/Main.jsx 와 App.js 에서 진행해주시면 됩니다!_
   
// Main Page 사진

<br/>

# [실습 3번]

실습 3번 문제와 실습 4번 문제는 직접적인 연관이 있는 문제입니다.
Menu Page에서 브랜드 명을 입력 받아 해당 Product 페이지로 이동할 수 있는 버튼을 만들어주세요! 
이동할 수 있는 브랜드는 5가지입니다.

1. 맘스터치
2. 맥도날드
3. 롯데리아
4. KFC
5. 버거킹
 
<br/>
_src/pages/Menu.jsx, src/pages/Product.jsx, App.js 에서 진행해주시면 됩니다!_

// Menu Page 사진

<br/>

# [실습 4번]

Menu Page에서 브랜드 명을 입력받아 해당 내용으로 Product Page로 이동했습니다.
data라는 이름으로 된 객체 배열이 존재하는데요!
<br/>
Menu Page에서 입력한 브랜드 명이 data 객체 배열에 존재하는 key 값이라면,
해당 브랜드 명, 제품 명, 가격을 그림과 같이 나타내주세요! 

만약, 이외의 브랜드를 입력받았다면 다음과 같이 "해당 브랜드의 제품을 찾을 수 없습니다." 라고 표시해주세요!

<br/>
_src/pages/Menu.jsx, src/pages/Product.jsx, App.js 에서 진행해주시면 됩니다!_

// Product Page 사진

<br/>

<br/>

# [실습 5번]

1~4번 문제에서 정의되지 않은 경로로 접근하려는 경우는 없어야겠죠??
비정상적인 경로로 접근하는 경우에는 다음과 같이 "존재하지 않는 페이지 입니다." 라고 표시해주세요!

<br/>
_src/pages/NotFound.jsx, App.js 에서 진행해주시면 됩니다!_

// NotFound 사진

<br/>
