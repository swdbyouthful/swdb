# SWDB (수원동부교회 캠페인 초대장)

수원동부교회 "행복한 사람들의 봄 축제" 초대장 웹사이트입니다. Next.js 15 App Router 기반의 정적 사이트로, GitHub Pages에 배포됩니다.

## 요구 사항

- Node.js v24.12.0 (`.nvmrc` 참고)
- Yarn

## 설치

```bash
nvm use
yarn install
cp .env.example .env
```

`.env`의 `NEXT_PUBLIC_NAVER_MAP_CLIENT_ID`에 네이버 클라우드 플랫폼에서 발급한 Maps 클라이언트 ID를 설정합니다.

## 개발

```bash
yarn dev
```

개발 서버는 `http://localhost:3001`에서 실행됩니다.

## 배포

### 수동 배포

```bash
# next.config.ts 의 `output: 'export'` 주석 해제 후
yarn deploy
```

`predeploy` 단계에서 `.next`를 정리하고 빌드한 뒤, `out/` 디렉토리를 `gh-pages` 브랜치로 푸시합니다.

### 자동 배포

`main` 브랜치에 push 하면 `.github/workflows/deploy.yml` 워크플로우가 자동으로 GitHub Pages에 배포합니다.

## 기술 스택

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS v4
- Swiper (이미지 캐러셀), dayjs (날짜)
- Naver Maps API (외부 스크립트)
