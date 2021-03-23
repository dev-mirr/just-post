#### tsconfig 파일
- vscode에서 사용하는 TypeScript의 환경설정 파일
- 컴파일 옵션, 컴파일 대상 등의 설정
- 개발 시 특정 경로를 매핑하여 인텔리센스에 나오도록 함(paths)

## craco.config.js (webpack)
### webpack: 
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


