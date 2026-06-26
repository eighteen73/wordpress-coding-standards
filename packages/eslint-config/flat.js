const wpPlugin = require( '@wordpress/eslint-plugin' );

/**
 * WordPress packages provided at runtime and externalized at build time.
 *
 * @wordpress/eslint-plugin v22 ignored these in `import/no-unresolved`; v25
 * removed that behaviour. Restore it for block plugin projects.
 *
 * @see https://github.com/WordPress/gutenberg/pull/37639
 */
const wpPackagesRegExp = '^@wordpress/(?!(icons|interface|style-engine))';

/**
 * Remove the TypeScript import resolver from a flat config block.
 *
 * WordPress always enables eslint-import-resolver-typescript, but the package is
 * often not hoisted to the consumer project. ESLint then loads the `typescript`
 * compiler package instead, which is not a valid resolver. Flat config also deep-
 * merges `import/resolver`, so consumer overrides cannot remove it by adding
 * another resolver alone.
 *
 * @param {import('eslint').Linter.Config} config Flat config block.
 * @return {import('eslint').Linter.Config} Config without a TypeScript resolver.
 */
function stripTypeScriptResolver( config ) {
	const resolver = config.settings?.['import/resolver'];

	if ( ! resolver || typeof resolver !== 'object' || Array.isArray( resolver ) ) {
		return config;
	}

	const { typescript, ...resolvers } = resolver;

	if ( ! typescript ) {
		return config;
	}

	return {
		...config,
		settings: {
			...config.settings,
			'import/resolver': resolvers,
		},
	};
}

module.exports = [
	...wpPlugin.configs.recommended.map( stripTypeScriptResolver ),
	{
		settings: {
			'import/internal-regex': wpPackagesRegExp,
			'import/resolver': {
				node: { extensions: [ '.js', '.jsx', '.json' ] },
			},
		},
		rules: {
			'import/no-unresolved': [
				'error',
				{
					ignore: [ wpPackagesRegExp ],
				},
			],
			'import/no-extraneous-dependencies': [
				'error',
				{
					devDependencies: true,
					peerDependencies: true,
				},
			],
		},
	},
];
