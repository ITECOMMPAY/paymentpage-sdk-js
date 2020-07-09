const signer = require('./signer');

/**
 * @property {Object} callback
 * @property {Object} callback.payment
 */
class Callback {
  constructor(secret, data) {
    const obj = typeof data === 'string' ? JSON.parse(data) : Object.assign({}, data);
    this.secret = secret;
    this.callback = obj;
    // remove signature from callback before we check valid
    this.removeSignature(this.callback);
    if (!this.isValid()) {
      throw new Error('Invalid signature');
    }
  }

  /**
   * Remove signature from callback for signing it again and compare with origin signature
   * @param {Object} obj
   */
  removeSignature(obj) {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object') {
        this.removeSignature(obj[key]);
      }
      if (key === 'signature') {
        // remember origin signature
        this.signature = obj.signature;
        // eslint-disable-next-line no-param-reassign
        delete obj.signature;
      }
    });
  }

  /**
   * Test callback signature
   *
   * @returns {boolean} True if signature is valid
   */
  isValid() {
    return signer(this.callback, this.secret) === this.signature;
  }

  /**
   * Returns is payment successful
   *
   * @returns {boolean}
   */
  isPaymentSuccess() {
    return Object.prototype.hasOwnProperty.call(this.callback, 'payment')
      && this.callback.payment.status === 'success';
  }

  /**
   * Returns payment ID
   *
   * @returns {(string|null)}
   */
  getPaymentId() {
    return Object.prototype.hasOwnProperty.call(this.callback, 'payment')
      ? this.callback.payment.id
      : null;
  }
}

module.exports = Callback;
