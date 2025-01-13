# 세무회계 정민

## 목차

1. [소개](#소개)
2. [설치 및 실행](#설치-및-실행)
3. [빌드 및 배포](#빌드-및-배포)
4. [테스트](#테스트)

## 소개

세무회계 정민 티스토리 블로그 스킨입니다.

- 개발 환경: [taxaroundus.tistory.com](https://taxaroundus.tistory.com)
- 운영 환경: [jeongmintax.tistory.com](https://jeongmintax.tistory.com)

## 설치 및 실행

### 설치

```shell
nvm use
npm install
```

### 실행

아래 명령어 중 하나를 실행하고, [localhost:3000](http://localhost:3000) 주소로 접속하여 페이지를 확인합니다.

```shell
# 홈 페이지
npm run dev

# 카테고리 페이지
npm run dev:category

# 글 페이지
npm run dev:page

# 검색 페이지
npm run dev:search
```

## 빌드 및 배포

### 빌드

```shell
# 개발 환경
npm run build:dev

# 운영 환경
npm run build:live
```

### 배포

```shell
# 개발 환경
npm run deploy:dev

# 운영 환경
npm run deploy:live
```

- 빌드 결과물을 티스토리 스킨에 배포하려면 `TSSESSION` 환경 변수가 필요합니다. `TSSESSION` 값은 웹 브라우저에서 티스토리 로그인 후 개발자 도구 쿠키 항목을 확인하여 얻을 수 있습니다.
- `TSSESSION` 값을 `.env.production.*` 파일에 작성하고 명령어를 실행해 주세요.
- 티스토리 스킨 배포는 현재 **사용 중인 스킨 파일을 교체**합니다. 따라서 배포를 완료하면 페이지에 접속해서 문제가 없는지 확인해 주세요.

## 테스트

```shell
npm run test:watch
```
