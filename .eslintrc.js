module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/destructuring-assignment": "off",
    "max-len": "off",
    "arrow-body-style": "off",
    "object-curly-newline": "off",
    "react/prefer-stateless-function": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": [1, {ignore: ["classes"]}],
    "react/require-default-props": "off",
    "react/sort-comp": "off",
    "react/forbid-prop-types": "off"
  },
};
