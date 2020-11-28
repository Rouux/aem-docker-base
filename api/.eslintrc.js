/* eslint-disable max-len */
/**
 * @type {import('eslint').Linter.Config<import('eslint/rules/index').ESLintRules>}
 */
module.exports = {
	root: true,
	extends: ['prettier', 'prettier/@typescript-eslint', 'eslint:recommended'],
	env: {
		browser: true,
		node: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'no-console': 'warn',
		indent: ['warn', 'tab'],
		'dot-notation': 'error',
		'no-empty-function': 'off',
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'arrow-body-style': 'error',
		'eol-last': ['error', 'always'],
		eqeqeq: ['error', 'always'],
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: true
			}
		],
		'linebreak-style': ['error', 'unix'],
		'constructor-super': 'error',
		curly: ['error', 'multi-or-nest'],
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		'no-var': 'error',
		'no-unused-vars': 'off',
		'prefer-const': 'error',
		'guard-for-in': 'error',
		'id-denylist': ['warn', 'a', 'b', 'c', 'e', 'i', 'j', 'k', 'l'],
		'max-len': [
			'error',
			{
				code: 100
			}
		],
		'no-bitwise': 'error',
		'no-empty': 'error',
		'no-eval': 'error',
		'no-caller': 'error',
		'no-debugger': 'error',
		'no-fallthrough': 'warn',
		'no-new-wrappers': 'error',
		'no-shadow': [
			'error',
			{
				hoist: 'all'
			}
		],
		'no-labels': 'error',
		radix: 'error',
		'valid-typeof': 'error',
		'spaced-comment': [
			'error',
			'always',
			{
				markers: ['/']
			}
		],
		'arrow-parens': ['warn', 'as-needed'],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'prefer-template': 'warn',
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false
				}
			}
		],
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-unused-expressions': 'warn',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{
				functions: false
			}
		],
		'@typescript-eslint/type-annotation-spacing': 'error',
		'@typescript-eslint/unified-signatures': 'error',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'property',
				modifiers: ['private'],
				format: ['camelCase', 'UPPER_CASE'],
				leadingUnderscore: 'require'
			},
			{
				selector: 'memberLike',
				format: ['camelCase'],
				leadingUnderscore: 'forbid'
			}
		]
	}
};
