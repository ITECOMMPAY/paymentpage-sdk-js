const signer = require('./signer');

/**
 * @property {Object} callback
 * @property {Object} callback.payment
 */
class Callback {
  constructor(secret, data) {
    const obj = typeof data === 'string' ? JSON.parse(data) : data;
    this.secret = secret;
    this.callback = obj.body;
    this.signature = obj.signature;
    if (!this.isValid()) {
      throw new Error('Invalid signature');
    }
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
    return this.callback.payment.status === 'success';
  }

  /**
   * Returns payment ID
   *
   * @returns {string}
   */
  getPaymentId() {
    return this.callback.payment.id;
  }
}

module.exports = Callback;
