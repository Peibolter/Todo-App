module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'eslint:recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh','react'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['C:\\Users\\Peiboll\\Desktop\\todo-app-typescript\\todo-app-ts\\tsconfig.json', 'C:\\Users\\Peiboll\\Desktop\\todo-app-typescript\\todo-app-ts\\tsconfig.node.json'],
  tsconfigRootDir: 'C:\\Users\\Peiboll\\Desktop\\todo-app-typescript\\todo-app-ts',
   },
  rules: {
    "react/prop-types" : off,
    "react/react-in-jsx-scope": 'off'
  },
}
