// lint-staged.config.js
module.exports = {
  '*.{js,jsx}': ['eslint --fix'],
  '*.{ts,tsx}': [() => 'tsc --skipLibCheck --noEmit', 'eslint --fix'],
};
