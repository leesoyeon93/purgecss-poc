
# react 로 프로젝트 생성
https://create-react-app.dev/docs/adding-typescript/
```
npx create-react-app my-app --template typescript
```

# craco란 ? 
https://craco.js.org/

https://abangpa1ace.tistory.com/entry/Craco-CracoCreate-React-App-Configuration-Override-%EB%9E%80

여러 설정 파일 모음
https://github.com/dilanx/craco


## craco + type alias
https://leego.tistory.com/entry/React-CRA%EC%97%90%EC%84%9C-Path-alias-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0



# webpack cli 설치 
https://webpack.kr/guides/getting-started

```
yarn add -D webpack webpack-cli
```

## webpack 초기화

https://webpack.kr/api/cli/

```
npx webpack init 
```

여러 옵션 선택 ㄱㄱ 


# purgecss 
https://purgecss.com/getting-started.html

## purgecss + webpack 
https://purgecss.com/plugins/webpack.html

### package.json

```
"postbuild": "npx purgecss --css build/static/css/*.css --content build/index.html build/static/js/*.js --output build/static/css" 

```