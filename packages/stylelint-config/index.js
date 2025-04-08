'use strict';

module.exports = {
	extends: '@wordpress/stylelint-config/scss',
	plugins: [
		'stylelint-order'
  	],
  	rules: {
		'order/order': [
			'custom-properties',
			'declarations'
		],
		'order/properties-alphabetical-order': true,
		'comment-empty-line-before': [
			'always',
			{
				'except': [ 'first-nested' ],
				'ignore': [ 'stylelint-commands' ]
			}
		],
		'block-closing-brace-newline-before': 'always-multi-line',
		'declaration-block-semicolon-newline-after': 'always-multi-line',
		'declaration-block-single-line-max-declarations': 4,
		'declaration-no-important': true,
		'declaration-property-unit-allowed-list': {
			'animation': [ 'ms' ],
			'animation-delay': [ 'ms' ],
			'animation-duration': [ 'ms' ],
			'line-height': [],
			'transition': [ 'ms' ],
			'transition-delay': [ 'ms' ],
			'transition-duration': [ 'ms' ]
		},
		'function-url-quotes': 'always',
		'no-descending-specificity': null,
		'max-line-length': null,
		'max-empty-lines': 1,
		'max-nesting-depth': [
			4,
			{
				'ignore': [ 'blockless-at-rules' ]
			}
		],
		'rule-empty-line-before' : [
			'always',
			{
				'except': [ 'first-nested' ],
				'ignore': [ 'after-comment' ]
			}
		],
		'at-rule-empty-line-before' : [
			'always',
			{
				'except': [ 'blockless-after-blockless', 'first-nested' ],
				'ignore': [ 'after-comment' ],
				'ignoreAtRules': [ 'if', 'else if', 'else' ]
			}
		],
		'number-max-precision': 3,
		'custom-property-pattern': [
			'^([a-z][a-z0-9]*)(-[a-z0-9]+)*$|^wp--([a-z][a-z0-9]*)(--[a-z0-9]+(-[a-z0-9]+){0,}){1,}$',
			{
				message: 'Expected custom property name to be kebab-case or wp--kebab--case',
			},
		],
		'selector-id-pattern': null
	}
}
