# eighteen73 WordPress coding standards

eighteen73 coding standards for WordPress projects.

## Setup

Each ruleset is available individually via Composer or NPM. To install the needed ruleset, use one of the following commands:

 - PHPCS: `composer require --dev eighteen73/wordpress-coding-standards`
 - ESLint: `npx install --save-dev @eighteen73/eslint-config-wordpress`
 - stylelint: `npm install --save-dev @eighteen73/stylelint-config-wordpress`

## Using PHPCS

Run the following command to run the standards checks:

```
vendor/bin/phpcs --standard=vendor/eighteen73/wordpress-coding-standards .
```

We use the [DealerDirect phpcodesniffer-composer-installer](https://github.com/Dealerdirect/phpcodesniffer-composer-installer) package to handle `installed_paths` for PHPCS when first installing the eighteen73 ruleset. If you an error such as `ERROR: Referenced sniff "WordPress-Core" does not exist`, delete the `composer.lock` file and `vendor` directories and re-install Composer dependencies.

The final `.` here specifies the files you want to test; this is typically the current directory (`.`), but you can also selectively check files or directories by specifying them instead.

### Included Checks

The phpcs standard is based upon the `WordPress-VIP` standard from [WordPress Coding Standards](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards), with [customisation and additions](Eighteen73-WordPress-Default/ruleset.xml) to match our style guide.

### Excluding/Disabling Checks

Rules can be disabled inline. [phpcs rules can be disabled](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Advanced-Usage#ignoring-parts-of-a-file) with a `// @codingStandardsIgnoreLine` comment, and [ESLint rules can be disabled](http://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments) with a `/* eslint disable ... */` comment.

To find out what these codes are, specify `-s` when running `phpcs`, and the code will be output as well. You can specify a full code, or a partial one to disable groups of errors.

## Using ESLint

The ESLint package contains an [ESLint](https://eslint.org/) configuration which you can use to validate your JavaScript code style. While it is possible to run ESLint via phpcs, we recommend you install and use eslint via npm directly. See [the `@eighteen73/eslint-config-wordpress` package README](packages/eslint-config-wordpress/README.md) for more information on configuring ESLint to use the eighteen73 coding standards.

To integrate the eighteen73 rules into your project, add a `.eslintrc` file and extend these rules. You can also add your own rules and overrides for further customization.

```json
{
  "extends": "@eighteen73/eslint-config-wordpress"
  "rules": {
    ...
  }
}
```

## Using stylelint

The stylelint package contains a [stylelint](https://stylelint.io/) configuration which you can use to validate your CSS and SCSS code style. We recommend you install and use stylelint via npm directly. See [the `@eighteen73/stylelint-config-wordpress` package README](packages/stylelint-config/README.md) for more information on configuring stylelint to use the eighteen73 coding standards.

To integrate the eighteen73 rules into your project, add a `.stylelintrc` file and extend these rules. You can also add your own rules and overrides for further customization.

```json
{
  "extends": "@eighteen73/stylelint-config-wordpress",
  "rules": {
    ...
  }
}
```
