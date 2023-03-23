module.exports = {
  arrowParens: 'avoid',
  printWidth: 80,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  vueIndentScriptAndStyle: true,
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  plugins: [
    require.resolve('prettier-plugin-organize-imports'),
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('@trivago/prettier-plugin-sort-imports'),
  ],
};
