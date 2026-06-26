# @eighteen73/eslint-config-wordpress

eighteen73 coding standards for JavaScript in WordPress projects.

This package re-exports the WordPress recommended ESLint preset (`plugin:@wordpress/eslint-plugin/recommended`) under the eighteen73 namespace.

## Installation

Install the config and its peer dependencies:

```bash
npm install --save-dev @eighteen73/eslint-config-wordpress eslint @wordpress/eslint-plugin @wordpress/scripts
```

Requires `@wordpress/scripts@^32` (ESLint 10 + flat config).

## Usage

Create an `eslint.config.cjs` file in your project root:

```js
const eighteen73 = require( '@eighteen73/eslint-config-wordpress' );

module.exports = [
	{
		ignores: [ '**/build/**', '**/node_modules/**', '**/vendor/**' ],
	},
	...eighteen73,
];
```

Add your own rules and overrides as needed:

```js
const eighteen73 = require( '@eighteen73/eslint-config-wordpress' );

module.exports = [
	{
		ignores: [ '**/build/**', '**/node_modules/**', '**/vendor/**' ],
	},
	...eighteen73,
	{
		rules: {
			// your overrides
		},
	},
];
```

## Legacy (v1 — wp-scripts v31 / `.eslintrc`)

If your project uses `@wordpress/scripts@^31` with legacy `.eslintrc.json`, stay on v1:

```bash
npm install --save-dev @eighteen73/eslint-config-wordpress@^1
```

```json
{
  "extends": "@eighteen73/eslint-config-wordpress",
  "rules": {
    ...
  }
}
```

## Migration from v1 to v2

| v1 | v2 |
|---|---|
| `@wordpress/scripts@^31` | `@wordpress/scripts@^32` |
| ESLint 8 | ESLint 10 |
| `.eslintrc.json` | `eslint.config.cjs` |
| `@wordpress/eslint-plugin@^22` | `@wordpress/eslint-plugin@^25` |

**Breaking changes in v2:**

- Default export is a flat config array, not an eslintrc object
- Requires ESLint 10 and `@wordpress/eslint-plugin@^25`
- `.eslintrc.json` is not supported by this major

**No change to rules** — still WordPress recommended only.
