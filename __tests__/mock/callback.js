const OriginCallback = require('../../src/callback');

module.exports = class Callback extends OriginCallback {
  // eslint-disable-next-line class-methods-use-this
  isValid() {
    return true;
  }
};
