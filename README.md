# Team Alpha Main Web
<!--
[![Better Uptime Badge](https://betteruptime.com/status-badges/v1/monitor/5ti3.svg)](https://betteruptime.com/?utm_source=status_badge)
-->

HTML과 Express 기반으로 제작하였습니다.

## 코드 트리

- node_modules : node.js 작동 필요 파일(* 깃허브에는 올라가지 않음, npm i 명령어로 설치시 생성됨) (* 이하 경로는 Tree에 포함하지 않음)
- public 폴더 : html에서 필요한 파일
    - components 폴더 : navbar, footer등 include 파일
        - navbar.html : navbar 파일
        - footer.html : footer 파일
    - policy 폴더 : 이용약관, 개인정보 처리방침 등 원본 파일
        - privacy 폴더 : 개인정보 처리방침 원본 파일(* 이하 경로는 Tree에 포함하지 않음)
        - term 폴더 : 이용약관 원본 파일(* 이하 경로는 Tree에 포함하지 않음)
        - term_discord 폴더 : 디스코드 이용약관 원본 파일(* 이하 경로는 Tree에 포함하지 않음)
        - term_service 폴더 : 서비스 이용약관 원본 파일(* 이하 경로는 Tree에 포함하지 않음)
    - static 폴더 : css, js, font, img 등 디자인 및 기능 구성 파일(* 이하 경로는 Tree에 포함하지 않음)
    - status 폴더 : 웹 사이트 상태 분석을 위한 파일(* 이하 경로는 Tree에 포함하지 않음)
    - api 폴더 : API 기능 파일(* 이하 경로는 Tree에 포함하지 않음)
- router 풀더 : 라우터 작동 필요 파일
    - main.js : 라우터 작동 파일
- views 폴더 : html 파일
    - dashboard 폴더 : 대시보드 페이지(* 이하 경로는 Tree에 포함하지 않음)
    - team 폴더 : team과 관련된 페이지
        - join.html : 채용 페이지
    - term 폴더: 이용약관과 관련된 페이지
        - index.html : 약관 선택 페이지
        - preparing.html : 커밍순 페이지
        - privacy.html : 개인정보취급방침 페이지
        - service 폴더 : 서비스별 이용약관 리스트 페이지
            - index.html : 서비스별 이용약관 리스트 페이지
            - (* 이외 파일은 Tree에 포함하지 않음)
        - tos.html : 이용약관 페이지
    - 403.html : 403 오류 페이지
    - 404.html : 404 오류 페이지
    - about.html : 소개 페이지
    - bots.html : 봇 리스트 페이지
    - discord.html : 디스코드 리다이렉트 페이지
    - index.html : 메인 페이지
    - members.html : 팀원 리스트 페이지
- .gitignore : 깃에 올라가지 않는 파일
- config.json : (* 깃허브에는 올라가지 않음, 아래 config.json 작성 방법을 참고하여 작성 필요)
- ecosystem.config.js : EcoSystem 설정 파일
- index.js : 코어 부팅
- package.json : node.js 작동 필요 파일
- package-lock.json : node.js 모듈 설치 필요 파일
- Procfile : Heroku 호스팅 시 필요한 Worker 파일
- README.md : 본 안내 파일

## config.json 작성 방법
|서비스 상태 |port 값 |JSON 코드 |
|---|---|---|
|Develop |3000(80, 443외 다른 포트도 가능) |{"port": "3000"} |
|HTTP(Production) |80 |{"port": "80"} |
|HTTPS(Production) |443 |{"port": "443"} |
|ALT(Production) |8080 |{"port": "8080"} |

## 시스템 사항

|   이름  |   버전   | 사용 여부          |
| --------| ------- | ------------------ |
| Test | Ubuntu 18.09.x   | :white_check_mark: |
| Test | Ubuntu 20.04.x   | :white_check_mark: |
| Test | Windows 10   | :white_check_mark:                |
| Test | Windows Server 2012   | :white_check_mark:                |
| Test | Windows Server 2019   | :white_check_mark:                |

## 실행방법 (우분투 기준)
0
```sh
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```
1
```sh
$ git clone https://github.com/team-alpha-kr/Web-HTML
```
2
```sh
$ npm i
```
3
```sh
$ npm start
```


Author(s) : Norhu1130, kms0219kms, chul....

views, public (C) kms0219kms(Licensed: Team Alpha) All rights reserved.

index.js, Core (C) norhu1130(Licensed: Team Alpha) All rights reserved.

term page (C) kms0219kms(Licensed: Team Alpha) All rights reserved.
