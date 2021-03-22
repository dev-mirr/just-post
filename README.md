## 단지 리액트 공부를 위한 포스트를 만들었을 뿐입니다!

#### tsconfig 파일
- vscode에서 사용하는 TypeScript의 환경설정 파일
- 컴파일 옵션, 컴파일 대상 등의 설정
- 개발 시 특정 경로를 매핑하여 인텔리센스에 나오도록 함(paths)

#### 1. craco.config.js (webpack)

##### (1.1.) webpack: 
- configure: 
- alias: 개발 시 import의 경로를 줄이는데 사용
```js
import '../../../../../hi'
// alias 사용 시
import '@/hi'
```