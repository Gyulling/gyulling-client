<div align="center">

<h2> 🐋 Fin 🐳 </h2>

서비스 설명

<br/>

</div>

<h2> ✨ Fin 주요 기능 </h2>

<!-- <h3> 1️⃣ A 기능 </h3> -->
<!-- <img src=""  alt="기능1-대표이미지" /> -->
<!-- <div >유저에게 소중한 기념일을 생성하고, 그날의 제목/카테고리/기분/설명을 입력한다.
입력을 완료하면 해당 카테고리 테마에 있는 케이크에 촛불이 생성된다. <br/></div> -->

<div>해양환경문제에 관한 키워드 제공.</div>

<!-- <img width="597" alt="스크린샷 2023-11-26 오전 8 10 19" src="https://github.com/DOSOPT-SOPKATHON-WEB4/Web/assets/81505421/2b0936af-3450-4aed-9837-48be618bddf3"> -->

<br/>

<h2> 👥 Team </h2>

### 👨‍💻 팀원 정보

<table align="center">
    <tr align="center">
        </td>
        <td style="min-width: 300px;">
            <a href="https://github.com/Arooming">
              <img src="https://avatars.githubusercontent.com/u/80264647?v=4" width="300">
              <br />
              <b>서아름</b>
            </a>
        </td>
        <td style="min-width: 300px;">
            <a href="https://github.com/5wintaek">
              <img src="https://avatars.githubusercontent.com/u/109938280?v=4" width="300">
              <br />
              <b>오승택</b>
            </a> 
    </tr>
    <tr align="center">
        <td>
            Web FE
        </td>
        <td>
            Web FE
        </td>
    </tr>
</table>

<br/>

### 👨‍💻 팀원 역할 분담

<table>
    <tr align="center">
        <td>
            🍊 서아름
        </td>
        <td>
        A 뷰 / B 뷰 / C 뷰
        </td>
    </tr>
    <tr align="center">
        <td>
            🐴 오승택
        </td>
        <td>
        A 뷰 / B 뷰 / C 뷰
        </td>
    </tr>
</table>

<br/>

## 🎋 브랜치 전략

- 브랜치 전략

  - `main`: 최종 배포용 브랜치
  - `dev`: 기능 개발용 브랜치
  - `담당자명/기능이름`: 기능 별 브랜치
    - ex. arooming/login

  ```js
  main
    ㄴ develop
        ㄴ arooming/login
        ㄴ taek/modal
  ```

- 🚨 반드시 **직속 상위 브랜치**로 머지
- ❌ 구름톤에서는 빠른 작업을 위해 issue를 사용하지 않습니다!

<br />

## 📚 커밋 컨밴션

- 커밋 단위는 반드시 최소한의 작업 단위로 쪼개서, 한 PR당 10커밋 이상 넘어가지 않도록 합니다.

| 커밋  | 역할                                               |
| ----- | -------------------------------------------------- |
| init  | 초기세팅과 관련된 커밋                             |
| feat  | 기능 구현과 관련된 커밋                            |
| style | 코드 순서, css등의 포맷에 관한 커밋 (기능에 변화X) |
| fix   | 버그를 고친 경우                                   |
| docs  | README.md 등 문서를 작성한 경우                    |
| chore | 주석 추가, 자잘한 문서 수정                        |

<br/>

## 📁 폴더 구조

```
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
    	|-- 📁 components
    	|-- 📁 common
	|-- 📁 pages
	|-- 📁 libs
       		 |-- 📁 hooks
	|-- 📁 constants
	|-- 📁 assets
		|-- 📁 icon
		|-- 📁 image
	|-- 📁 style
		|-- globalStyle.js
		|-- theme.js
	|-- App.jsx
	|-- main.jsx
	|-- Router.jsx
|-- .eslintrc.cjs
|-- .prettierrc.cjs
|-- .gitignore
|-- index.html
|-- package.json
|-- README.md
|-- vite.config.js
|-- pakage-lock.lock
```

📁 **src > assets**
필요한 아이콘 파일은 Figma 에서 **svg로 export** 한 후 `assets/icon`

- ic_arrow.svg
  필요한 이미지 파일은 Figma 에서 **png로 export** 한 후 `assets/image`폴더에 넣기

- img_picture.png
  index.ts에서 svg 컴포넌트화 하여 export → 컴포넌트에서 import 시 컴포넌트처럼 불러오기

- 파일명 : `ic_test.svg` _(snake case)_
- 컴포넌트명 (사용할 때) : `IcTest.svg` _(Pascal case)_

📁 **src > pages**
페이지의 최상단 컴포넌트. 각 컴포넌트를 하나의 페이지에서 호출하는 곳

📁 **src > components**
⇒ 페이지 내부 기능 컴포넌트

📁 **src > common**
⇒ 여러 페이지에서 사용할 공통 컴포넌트 (ex- Button, Header)

📁 **src > api**
api 함수 모아놓는곳

📁 **src > hooks**
custom hooks 정의하는 경우 이곳에서 정의 후 사용

📁 **src > constants**
상수 데이터 파일 분리하여 사용하는 경우 이곳에서 정의 후 사용

<br/>

## 🛠 기술 스택

| 역할                 | 종류                                                                                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                |
| Programming Language | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)                                                                                             |
| Styling              | ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                                                           |
| Data Fetching        | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)                                                                                                                |
| Formatting           | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) |
| Package Manager      | ![npm](https://img.shields.io/badge/Npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)                                                                                                                      |
| Version Control      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  |

<br />

## 💡 주요 라이브러리

```
"vite-plugin-svgr": "^4.2.0"
```

<br />

## 👨‍👧‍👧 우리만의 그라운드룰

- `div`남발하지 않고 최대한 시멘틱한 태그를 사용하도록 노력하자
- 해커톤 환경 특성상 난이도/볼륨에 대해 적극적으로 의견을 나누자
- 타파트/자신파트의 결정사항에 있어서 조금이라도 불확실한 부분은 **반드시!! 확실하게 짚고 넘어가** 🚨
- 리프레시 타임을 가지자♻️ : 2시간에 한번씩 5분! 일어나서 움직이고, 스트레칭하고, 산소 공급합시다

<br />

<h2>웨비 Before and After</h2>
<h3>Before</h3>
<img src="" alt="해커톤 전 (before)"/>
 
<h3>After</h3>
<img src="" alt="해커톤 후 (after)"/>

<br />

## 🎀 시연 영상

[서비스명](영상링크)
