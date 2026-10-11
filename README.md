# seoyeon83.github.io

김서연의 포트폴리오 사이트입니다. → https://seoyeon83.github.io

- 빌드 과정 없는 정적 HTML/CSS (GitHub Pages, `main` 브랜치 루트에서 배포)
- 폰트: [Pretendard](https://github.com/orioncactus/pretendard) (jsDelivr CDN)
- 라이트/다크 모드: 시스템 설정을 따르고, 우측 상단 버튼으로 전환 (브라우저에 저장)

## 구조

```
index.html            첫 화면: 프로필 · 일하는 방식 · 프로젝트 요약 · 기술 스택 · 자격증 · 학력/활동
projects/kg-rag.html  KG-RAG 기반 화장품 추천 시스템 (Team 4EVR0)
projects/boaz-web.html BOAZ 공식 웹 사이트
projects/elixir.html  엘릭서: 저속노화 식단 관리 서비스
assets/style.css      공통 스타일 (색상 토큰은 :root 에 정의)
assets/theme.js       다크 모드 토글
404.html
```

## 로컬 미리보기

```bash
python -m http.server 8000
# http://localhost:8000
```
