# YPLABS 앱 개발 과제

<img width="1290" alt="image" src="https://github.com/user-attachments/assets/bff7d338-132b-4d3b-92d1-7aec1f1c66b4">
## 기능구현

- [O] Todo item 작성
  - [O] 공백 validation
  - [O] 모달로 구현
- [O] Todo item 삭제
- [O] Todo item 수정
  - [O] 공백 validation
  - [O] 작성 모달과 통일감 있는 UI
- [O] Todo 완료 여부 토글로 표현
  - [O] 토글 된 값 기기에 저장
  - [O] 완료된 Todo 수정 불가
- [O] 상세 보기 페이지
  - [O] 완료 및 취소 가능
  - [O] item 수정
- [O] item 5줄 표현
- [O] 아래로 밀어서 새로고침
- [O] pagination

## 아키텍처

### components 폴더

- `/components/ui`: 비즈니스 로직이 없는 순수 UI 컴포넌트들이 포함됩니다.
- `/components`: 비즈니스 로직이 포함된 컴포넌트들이 포함됩니다.

### redux

redux를 이용한 상태관리에 필요한 코드들을 `/store` 폴더에 관심사별로 묶었습니다.
해당 관심사별로 다음과 같은 파일들이 포함될 수 있습니다.

- `*.api.ts`: 서버 통신 코드
- `*.saga.ts`: 서버 통신을 위한 saga 코드
- `*.slice.ts`: redux toolkit을 이용해 상태관리에 필요한 slice 코드
- `*.type.ts`: 관련된 타입들

그 후 작성된 redux 관련 코드를 관심사별 hook으로 wrapping 해주어 component 및 screen에서 보일러 플레이트 없이 사용할 수 있도록 했습니다.

## 개발환경

- `node`: v20.10.0
- `ruby`: v2.6.10
- `cocoapods`: v1.16.2
- `android compileSdkVersion`: 35
- `IPHONEOS_DEPLOYMENT_TARGET`: 15.1

## 앱 실행

```bash
 $ yarn install
 $ yarn pod-install

 # 안드로이드 실행
 $ yarn android

 # IOS 실행
 $ yarn ios
```

## challenging

### redux

redux를 사용해 상태를 관리하는 것은 처음이라 초기에 구조를 잡고 흐름을 파악하는 것에 어려움이 있었습니다.
다른분들이 소개한 여러 구조들을 파악한 후 제가 가장 선호하는 방식대로 설계했습니다.
그 후 구조에 맞춰 하나의 기능만을 구현한 후 그에 맞춰 다른 기능들을 확장하는 방식으로 빠르게 적응할 수 있었습니다.

### test

시간 상 saga function에 대한 테스트 환경을 익힐 시간이 충분치 않아 redux 코드를 wrapping한 hook을 테스트하려 했습니다.
`@testing-library/react`을 설치해 테스트를 작성해보았으나 해당 환경에 대한 테스트 환경 구축의 경험이 부족하고, 시간 내 모듈 및 트랜스파일링 에러를 해결할 수 없을 것 같아 제외하고 저장소에 push 했습니다.
