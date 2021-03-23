## ESLing
eslint는 프로젝트의 통일성 있는 코딩 스타일 가이드를 제공하는 툴

### eslint 설정
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

###### - eslint-plugin-prettier: prettier규칙들을 ESLint 규칙에 추가하여 eslint --fix를 실행하면 prettier --write를 사용할 필요 없이 prettier를 적용