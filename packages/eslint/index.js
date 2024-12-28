const base = require('./src/base');
const rushstack = require('./src/rushstack');

module.exports = {
  // base > rushstack 우선순위
  extends: [...base.extends, ...rushstack.extends],
  plugins: [...(base.plugins || []), ...(rushstack.plugins || [])],
  rules: { ...base.rules, ...rushstack.rules },
};
