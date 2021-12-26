module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  //extends: 'react-app',
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
}
