import js from '@eslint/js';
import styleXPlugin from '@stylexjs/eslint-plugin';
import stylisticPlugin from '@stylistic/eslint-plugin-ts';
import importPlugin from 'eslint-plugin-import';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';
import ts from 'typescript-eslint';

// BUG: https://github.com/sindresorhus/globals/issues/239
globals.browser.AudioWorkletGlobalScope = globals.browser['AudioWorkletGlobalScope '];
delete globals.browser['AudioWorkletGlobalScope '];

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ['**/*.{cjs,js,jsx,mjs,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2025,
        ...globals.jest,
        ...globals.node,
      },
    },
    plugins: {
      '@stylexjs': styleXPlugin,
      '@stylistic/ts': stylisticPlugin,
      import: importPlugin,
      perfectionist: perfectionistPlugin,
      react: reactPlugin,
    },
    rules: {
      '@stylexjs/sort-keys': ['warn', { allowLineSeparatedGroups: true }],
      '@stylexjs/valid-styles': 'error',
      '@stylistic/ts/padding-line-between-statements': ['error', { blankLine: 'always', next: 'return', prev: '*' }],
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/no-anonymous-default-export': [
        'warn',
        {
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowArray: true,
          allowArrowFunction: false,
          allowCallExpression: true,
          allowLiteral: false,
          allowNew: false,
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
            { group: 'builtin', pattern: 'react', position: 'after' },
            { group: 'external', pattern: '@/**', position: 'after' },
            { group: 'unknown', pattern: './**/*.*', position: 'after' },
            { group: 'unknown', pattern: '**/*.css', position: 'after' },
            { group: 'unknown', pattern: '**/*.scss', position: 'after' },
            { group: 'unknown', pattern: 'virtual:*', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          warnOnUnassignedImports: true,
        },
      ],
      'perfectionist/sort-object-types': [
        'error',
        {
          ignoreCase: false,
          order: 'asc',
          type: 'natural',
        },
      ],
      'react/jsx-sort-props': ['error', { callbacksLast: true }],
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
      react: {
        version: 'detect',
      },
    },
  },
];
