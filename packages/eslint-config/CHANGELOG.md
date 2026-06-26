# Changelog

## 2.0.0

### Breaking changes

- Default export is an ESLint flat config array (requires `eslint.config.cjs`), not a legacy eslintrc object.
- Requires ESLint 10 and `@wordpress/eslint-plugin@^25.4.0`.
- `.eslintrc.json` is no longer the supported configuration format for this major.

### Migration

- Stay on `@eighteen73/eslint-config-wordpress@^1` if using `@wordpress/scripts@^31` with `.eslintrc.json`.
- Upgrade to v2 when moving to `@wordpress/scripts@^32` or later.

### Added

- `flat.js` — flat config export spreading `@wordpress/eslint-plugin` recommended preset.
- `./legacy` subpath export for the v1 eslintrc config (`index.js`).

### Fixed

- Replace WordPress's TypeScript import resolver with the Node resolver so `import/no-unresolved` works in JS-only projects. WordPress enables `eslint-import-resolver-typescript`, but that package is often not hoisted to the consumer; ESLint then loads the `typescript` package itself and reports *"typescript with invalid interface loaded as resolver"* for every file.
- Restore `@wordpress/eslint-plugin` v22 behaviour for bundled WordPress packages: ignore most `@wordpress/*` imports in `import/no-unresolved` and allow `devDependencies` in `import/no-extraneous-dependencies`. `@wordpress/eslint-plugin` v25 removed these when moving to flat config.

### Unchanged

- Rules remain WordPress recommended only (`plugin:@wordpress/eslint-plugin/recommended`).

## 1.1.0

- Legacy eslintrc shareable config for ESLint 8 and `@wordpress/eslint-plugin@^22`.
