import js from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin-ts';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import styleXPlugin from '@stylexjs/eslint-plugin';
import nPlugin from 'eslint-plugin-n';
import promisePlugin from 'eslint-plugin-promise';
import globals from 'globals';
import ts from 'typescript-eslint';

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
      '@stylexjs': styleXPlugin,
      '@stylistic/ts': stylisticPlugin,
      import: importPlugin,
      n: nPlugin,
      promise: promisePlugin,
      react: reactPlugin,
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
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
          'newlines-between': 'always',
          pathGroups: [
            { pattern: 'react', group: 'builtin', position: 'after' },
            { pattern: '@/**', group: 'external', position: 'after' },
            { pattern: './**/*.*', group: 'unknown', position: 'after' },
            { pattern: 'virtual:*', group: 'unknown', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          warnOnUnassignedImports: true,
        },
      ],
      'react/jsx-sort-props': ['error', { callbacksLast: true }],
    },
  },
];
