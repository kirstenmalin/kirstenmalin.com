import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default defineConfig([
  js.configs.recommended,
  {
    ignores: ['dist/', 'node_modules/'],
  },
  {
    files: ['**/*.{js,ts}*(x)'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser
      },
      parser: tsParser,
    },
    plugins: {
      '@eslint-react': eslintReact,
      '@typescript-eslint': ts,
      '@stylistic': stylistic,
    },
    settings: {
      react: { version: '19' },
    },
    rules: {
      'class-methods-use-this': [
        'error',
        {
          exceptMethods: ['render'],
        },
      ],
      'import/extensions': ['off'],
      'no-bitwise': [
        'error',
        {
          int32Hint: true,
          allow: ['|', '&'],
        },
      ],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'one-var': [
        'error',
        {
          initialized: 'never',
        },
      ],
      '@stylistic/arrow-parens': ['warn', 'always'],
      '@stylistic/function-paren-newline': ['error', 'consistent'],
      '@stylistic/implicit-arrow-linebreak': ['off'],
      '@stylistic/indent': [
        'error',
        2,
        {
          SwitchCase: 1,
        },
      ],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],
      '@stylistic/max-len': [
        'error',
        {
          code: 100,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      '@stylistic/no-mixed-operators': [
        'error',
        {
          groups: [
            ['+', '-', '*', '/', '%', '**'],
            ['&', '|', '^', '~', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof'],
          ],
          allowSamePrecedence: true,
        },
      ],
      '@stylistic/operator-linebreak': [
        'error',
        'after',
        {
          overrides: { '?': 'ignore', ':': 'ignore' },
        },
      ],
      '@stylistic/quotes': [
        'error',
        'single',
        {
          allowTemplateLiterals: 'avoidEscape',
          avoidEscape: true,
        },
      ],
      semi: ['error', 'always'],
    },
  }
]);
