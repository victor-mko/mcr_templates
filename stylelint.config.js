module.exports = {
  plugins: [
    "stylelint-order"
  ],
  rules: {
    "declaration-colon-space-after": "always",
    "function-calc-no-unspaced-operator": true,
    "max-empty-lines": 2,
    "max-nesting-depth": 3,
    "order/declaration-block-properties-alphabetical-order": true,
    "selector-max-specificity": "0,3,0",
    "unit-case": "lower"
  }
}
