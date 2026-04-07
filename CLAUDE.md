# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어

- 한국어 사용

## 프로젝트 개요

수원동부교회(SWDB) 캠페인 초대장 웹사이트. Next.js 15 App Router 기반 정적 사이트로, GitHub Pages에 배포됨.

## 개발 명령어

- `yarn dev` — 개발 서버 실행 (포트 3001)
- `yarn build` — 프로덕션 빌드
- `yarn lint` — ESLint 실행
- `yarn deploy` — GitHub Pages 배포 (`predeploy`로 빌드 후 `out/` 디렉토리 배포)

## 기술 스택

- **프레임워크:** Next.js 15 (App Router), React 19, TypeScript
- **스타일:** Tailwind CSS v4 (PostCSS 플러그인), 커스텀 한국어 웹폰트 (Diphylleia, 조선일보명조, 나눔스퀘어네오)
- **애니메이션:** Framer Motion
- **UI:** Swiper (이미지 캐러셀), Lucide React (아이콘)
- **지도:** Naver Maps API (Script 태그로 로드)
- **배포:** GitHub Pages (정적 HTML export, `gh-pages` 패키지)

## 아키텍처

- **라우팅:** `/` → `/campaign/happy-people`으로 리다이렉트. 메인 캠페인 페이지가 유일한 실제 페이지
- **정적 사이트:** API 라우트 없음. `next.config.ts`에서 `assetPrefix`로 GitHub Pages 경로 처리, 이미지 최적화 비활성화 (`unoptimized: true`)
- **환경변수:** `.env`에 `CDN_URL`(GitHub Pages URL)과 `NAVER_MAP_CLIENT_ID` 설정
- **경로 별칭:** `@/*` → `./src/*`

## 코딩 스타일

- Prettier: 140자 줄 너비, 작은따옴표, es5 trailing comma, 2칸 들여쓰기
- Tailwind 클래스 정렬은 `prettier-plugin-tailwindcss`로 자동 처리
- Node.js v18.18.0 (`.nvmrc`)
