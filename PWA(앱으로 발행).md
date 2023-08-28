## PWA
[PWA장점]
1. 설치 마케팅 비용 적음(설치 시 드는 비용 100, 200원 정도)
2. 아날로그 유저들 배려
3. html css js 만으로 앱까지
4. 푸시알림, 센서 등

## PWA 셋팅된 리액트 프로젝트 생성
1. npx create-react-app 프로젝트명 --template cra-template-pwa
2. PWA 조건 충족([manifest.json], [service-worker.js]) 생성 확인
**manifest.json 파일**
- [short_name] : 앱 이름
- [icons] : 어떤 아이콘 사용할 것인지 -> 플랫폼마다 아이콘 크기가 다름(사이즈별로 맞춰주어야함)
- [start_url] : 앱 누르면 처음 뜨는 페이지 경로
- [display] : 앱켜면 브랑줘 상단바 제거할지 말지
- [theme_color] : 테마 색상
- [background_color] : 배경 색상
**service-worker.js 파일**
- 목적 : 오프라인에서도 사이트열 수 있게 도와줌
- index.js : serviceWorkerRegistration.unregister(); -> serviceWorkerRegistration.register();

## PWA 테스트 방법
1. npm run build
2. build를 vscode로 오픈
3. view->extensions->live server 설치
4. index.html 우클릭 -> Open with Live Server 클릭

## 특정 파일 캐싱안되게 하는 방법
1. node_modules/react-scripts/config/webpack.config.js
2. injectManifest 검색 -> 정규식으로 파일명을 작성해주면 해당 파일 캐싱 안됨(ex> index.html => /index\.html/)