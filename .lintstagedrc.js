const path = require('path');

console.log('lintstage');

const buildEslintCommand = (filenames) =>
  `yarn lint --fix --file ${filenames
  .map((f) => path.relative(process.cwd(), f))
  .join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
