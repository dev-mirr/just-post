## 단지 리액트 공부를 위한 포스트를 만들었을 뿐입니다!

#### tsconfig 파일
- vscode에서 사용하는 TypeScript의 환경설정 파일
- 컴파일 옵션, 컴파일 대상 등의 설정
- 개발 시 특정 경로를 매핑하여 인텔리센스에 나오도록 함(paths)

## 1. craco.config.js (webpack)
### 1.1. webpack: 
#### configure: 
#### alias
- 개발 시 import의 경로를 줄이는데 사용
```js
import '../../../../../hi'
// alias 사용 시
import '@/hi'
```
#### devtool
- 소스맵을 통해 빌드 파일과 원본파일을 연결시켜주는 역할
#### plugins
- 코드 난독화, 코드 분리(chunk) 등 웹팩을 통해 빌드된 결과물을 바꾸는 역할
##### plugins 설정파일들
- webpack.DeginePlugin: 모든 자바스크립트 코드에서 접근이 가능한 전역 변수를 선언하데 사용되는 플러그인
- html-webpack-plugin: 웹팩으로 빌드한 결과물로 HTML 파일을 생성해주는 플러그인
- compression-webpack-plugin: 결과물을 압축하는데 사용되는 플러그인
- cspHtml-webpack-plugin: 콘텐츠 보안 규약( content secure policy) 설정을 통해 스크립트, css, 이미지 등 많은 외부 또는 내부로부터의 출처를 지정하여 배포된 웹에 접근을 한정시킬 수 있는 설정
- jscrambler-webpack-plugin: 배포된 결과물을 보안을 위해 코드 난독화 시켜줌


## 2. ESLing 설정
eslint는 프로젝트의 통일성 있는 코딩 스타일 가이드를 제공하는 툴

### 2.1. eslint 설정
#### 플러그인(plugin)
서드파티 플러그인 사용을 지원
플러그인 패키지를 npm을 통해 설치하고, 해당 플러그인을 plugins에 추가하여 사용할 수 있음

#### 확장 (extends)
extends는 추가한 플러그인에서 사용할 규칙을 설정
플러그인은 [] 집합으로 이루어지며 플러그인을 추가해도 적용되지 않음. 사용할 규칙을 추가해야함.


#### 규칙(rules)
프로젝트에서 사용할 규칙을 추가하여 적용하는 부분
- "off" 또는 0: 규칙을 사용하지 않음
- "wran" 또는 1: 규칙을 경고로 사용
- "error" 또는 2: 규칙을 오류로 사용
###### 이외의 설정들
- max-depth: for, if 등의 객체 depth를 제한
- sort-imports: import 를 정렬함
- semi: 세미콜론(;) 입력 여부
- no-unneeded-ternary: 간단한 조건식인 경우 삼항 연산자 허용 못하게 함
- simple-import-sort: import 순서를  a-z로 정렬
- padding-line-between-statements: 
```
// var로 선언된 변수와 return 사이에 공백(빈줄) 이 필요함
{ "blankLine": "always", "prev": "var", "next": "return" }
```
참조: https://runebook.dev/ko/docs/eslint/rules/padding-line-between-statements