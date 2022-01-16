const errorType = process.env.NODD_ENV === 'development' ? 'warn' : 'error'

module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: ['eslint:recommended', 'airbnb'],
  plugins: [],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'max-len': ['error', {
      code: 100,
      comments: 100,
      ignoreUrls: true,
      // ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignoreTrailingComments: true,
    }],
  },
}
