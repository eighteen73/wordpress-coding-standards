# @eighteen73/browserslist-config-wordpress

eighteen73 Browserslist shared configuration.

## Installation

This package is a Browserslist shareable configuration.

To install this config:

```bash
npm install --save-dev @eighteen73/browserslist-config-wordpress
```

## Usage

Add this to your `package.json` file:

```json
"browserslist": [
	"extends @eighteen73/browserslist-config-wordpress"
]
```

Alternatively, add this to `.browserslistrc` file:

```
extends @eighteen73/browserslist-config
```

This package when imported returns an array of supported browsers, for more configuration examples including Autoprefixer, Babel, ESLint, PostCSS, and stylelint see the [Browserslist examples](https://github.com/ai/browserslist-example#browserslist-example) repo.
