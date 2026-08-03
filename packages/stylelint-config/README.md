# @eighteen73/stylelint-config-wordpress

eighteen73 coding standards for CSS and SCSS.

Requires **Node** `^20.19.0 || >=22.13.0`, **Stylelint** `^16.8.2`, and **stylelint-scss** `^6.4.0`.

## Installation

This package is a stylelint shareable configuration. Install it with its peer dependencies:

```bash
npm install --save-dev stylelint stylelint-scss @eighteen73/stylelint-config-wordpress
```

Then, add a `.stylelintrc` file and extend these rules. You can also add your own rules and overrides for further customization.

```json
{
  "extends": "@eighteen73/stylelint-config-wordpress",
  "rules": {
    ...
  }
}
```
