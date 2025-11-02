<h1>
  <img src="public/logo.svg" alt="로고" height="60" />
</h1>

[![hits](https://myhits.vercel.app/api/hit/https%3A%2F%2Fgithub.com%2Faroundus%2Fjeongmintax.tistory.com?color=green&label=hits&size=small)](https://myhits.vercel.app)

## 목차

1. [소개](#소개)
2. [사용 기술](#사용-기술)
3. [설치 및 실행](#설치-및-실행)
4. [빌드 및 배포](#빌드-및-배포)
5. [테스트](#테스트)

## 소개

세무회계 정민 티스토리 블로그 스킨입니다.

- 개발 환경: [taxaroundus.tistory.com](https://taxaroundus.tistory.com)
- 운영 환경: [jeongmintax.tistory.com](https://jeongmintax.tistory.com)

## 사용 기술

### 프론트엔드

- 프로그래밍 언어: React TypeScript
- 번들러: Vite
- 라이브러리: React Router, StyleX, shadcn/ui

### 백엔드

- 티스토리

### 데브옵스

- CI/CD: 없음
- 호스팅: 티스토리

## 설치 및 실행

### 설치

```shell
nvm use
nvm install // 해당하는 Node.js 버전이 없는 경우
npm install
```

### 실행

다음 명령어를 실행하고, [localhost:5173](http://localhost:5173) 주소로 접속하여 페이지를 확인합니다.

```shell
npm run dev
```

로컬 환경에서 운영 환경과 동일한 패스로 페이지에 접근할 수 있도록 `react-router-dom` 라이브러리로 라우터를 구성하였습니다.

| 페이지   | 패스                                        |
| -------- | ------------------------------------------- |
| 홈       | `/`                                         |
| 글       | `/{pageNo}`                                 |
| 카테고리 | `/category`<br />`/category/{categoryName}` |
| 검색     | `/search/{keyword}`                         |
| 공지사항 | `TBD`                                       |
| 태그     | `TBD`                                       |
| 방명록   | `TBD`                                       |

## 빌드 및 배포

### 빌드

다음 명령어를 실행하여 프로젝트를 빌드합니다.

```shell
npm run build
```

### 배포

다음 명령어를 실행하여 배포합니다.

```shell
# 개발 환경
npm run deploy:dev

# 운영 환경
npm run deploy:live
```

- 빌드 결과물을 티스토리 스킨에 배포하려면 `TSSESSION` 환경 변수가 필요합니다. `TSSESSION` 값은 웹 브라우저에서 티스토리 로그인 후 개발자 도구 쿠키 항목을 확인하여 얻을 수 있습니다.
- `TSSESSION` 값을 `.env.production.*` 파일에 작성하고 명령어를 실행해 주세요.
- 배포 스크립트를 실행하면 현재 **사용 중인 스킨 파일을 교체**합니다. 따라서 기존 스킨은 백업해 주시고 배포 후에는 페이지에 접속해서 정상적으로 동작하는지 확인해 주세요.

## 테스트

```shell
npm run test:watch
```
