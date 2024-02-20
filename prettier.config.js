const base = require('prettier-airbnb-config');

module.exports = {
  ...base,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^~/(.*)$', '^[./]'],
  importOrderSortSpecifiers: true,
};
