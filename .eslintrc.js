module.exports = {
  root: true,
  rules: {
    semi: ['error', 'never'],
    'no-debugger': 1,
    'jsx-quotes': [2, 'prefer-single'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': ['error'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}
