module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 권장 규칙 모음(패키지)
  extends: [
    // 'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  // 개별 규칙 (사용자 정의)
  rules: {
    'no-unused-vars': 'warn',
    'react/no-unknown-property': 'off',
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': 'error', // 모듈 경계에서 명시적 타입 요구
    '@typescript-eslint/no-explicit-any': 'error', // 명시적인 any 타입 사용 금지
    '@typescript-eslint/no-unused-vars': 'error', // 사용되지 않는 변수 금지
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
 };
}
