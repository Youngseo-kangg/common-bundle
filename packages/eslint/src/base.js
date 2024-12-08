module.exports = {
  extends: ['plugin:import/errors', 'eslint:recommended'],
  plugins: ['json-format', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error', // import 구문을 자동으로 정렬
    'simple-import-sort/exports': 'error', // export 구문을 자동으로 정렬
    'import/no-unresolved': 'off', // import 경로가 해결되지 않는 경우 경고를 끄는 규칙 off
    'import/prefer-default-export': 'off', // 모듈이 하나의 export만 포함할 때 default export를 권장하지 않도록 비활성화
    'import/extensions': 'off', // 파일 확장자 생략을 허용
  },
};
