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
		'max-line-length': 100,
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
		'selector-class-pattern': [
			'^(?<block>(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)(?<element>(?:__[a-z][a-z0-9]*(?:-[a-z0-9]+)*))?(?<modifier>(?:--[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)?$',
			{
				'resolveNestedSelectors': true
			}
		],
		'selector-id-pattern': null
	}
}
