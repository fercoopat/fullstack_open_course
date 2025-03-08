import globals from 'globals';
import js from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/quotes': ['error', 'single'],
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_', // Ignore unused arguments starting with _
          varsIgnorePattern: '^_', // Ignore unused variables starting with _
          caughtErrorsIgnorePattern: '^_', // Ignore unused catch parameters starting with _
        },
      ],
    },
  },
  {
    ignores: ['dist/**'],
  },
];
