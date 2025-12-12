module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		project: './tsconfig.json'
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	env: {
		node: true,
		es6: true
	},
	rules: {
		// TypeScript specific
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/no-non-null-assertion': 'warn',
		'@typescript-eslint/prefer-nullish-coalescing': 'warn',
		'@typescript-eslint/prefer-optional-chain': 'warn',
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/no-misused-promises': 'error',

		// General
		'no-console': 'off',
		'prefer-const': 'warn',
		'no-var': 'error',
		'semi': ['error', 'always'],
		'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
		'comma-dangle': ['error', 'never'],
		'no-trailing-spaces': 'error',
		'eol-last': ['error', 'always'],
		'object-curly-spacing': ['error', 'always'],
		'array-bracket-spacing': ['error', 'never'],
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }]
	},
	ignorePatterns: [
		'dist/',
		'node_modules/',
		'coverage/',
		'*.js',
		'!.*.js',
		'.*',
		'!.eslintrc.js'
	]
};
