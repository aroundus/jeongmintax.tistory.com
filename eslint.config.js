const globals = require('globals');
const js = require('@eslint/js');
const ts = require('typescript-eslint');

// BUG: https://github.com/sindresorhus/globals/issues/239
globals.browser.AudioWorkletGlobalScope = globals.browser['AudioWorkletGlobalScope '];
delete globals.browser['AudioWorkletGlobalScope '];

module.exports = [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    ignores: ['@types', 'dist', 'node_modules'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          modules: true,
        },
      },
    },
    plugins: {
      '@stylexjs': require('@stylexjs/eslint-plugin'),
      '@stylistic/ts': require('@stylistic/eslint-plugin-ts'),
      import: require('eslint-plugin-import'),
      n: require('eslint-plugin-n'),
      promise: require('eslint-plugin-promise'),
      react: require('eslint-plugin-react'),
    },
    rules: {
      '@stylexjs/sort-keys': [
        'warn',
        {
          allowLineSeparatedGroups: true,
        },
      ],
      '@stylexjs/valid-styles': 'error',
      '@stylistic/ts/padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/no-anonymous-default-export': [
        'warn',
        {
          allowArray: true,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowCallExpression: true,
          allowNew: false,
          allowLiteral: false,
          allowObject: true,
        },
      ],
    },
  },
];
