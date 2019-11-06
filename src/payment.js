const signer = require('./signer');

/**
 * Payment Object
 * @link https://developers.ecommpay.com/en/en_PP_Parameters.html
 *
 * @property {string} accountToken
 * @property {string} bestBefore
 * @property {string} cardOperationType
 * @property {string} cashierDefaultMode
 * @property {string} cashierForceMode
 * @property {boolean} cashierManualInput
 * @property {number} cashierMaxValue
 * @property {number} cashierMinValue
 * @property {boolean} closeOnMissclick
 * @property {string} cssModalWrap
 * @property {string} customerId
 * @property {boolean} forceAcsNewWindow
 * @property {string} forcePaymentMethod
 * @property {string} languageCode
 * @property {string} listPaymentBlock
 * @property {string} merchantFailUrl
 * @property {string} merchantSuccessUrl
 * @property {string} mode
 * @property {number} paymentAmount
 * @property {string} paymentCurrency
 * @property {string} paymentDescription
 * @property {string} paymentId
 * @property {boolean} recurringRegister
 * @property {string} customerFirstName
 * @property {string} customerLastName
 * @property {string} customerPhone
 * @property {string} customerEmail
 * @property {string} customerCountry
 * @property {string} customerState
 * @property {string} customerCity
 * @property {string} customerDayOfBirth
 * @property {string} customerSsn
 * @property {string} billingPostal
 * @property {string} billingCountry
 * @property {string} billingRegion
 * @property {string} billingAddress
 * @property {boolean} redirect
 * @property {string} redirectFailMode
 * @property {string} redirectFailUrl
 * @property {boolean} redirectOnMobile
 * @property {string} redirectSuccessMode
 * @property {string} redirectSuccessUrl
 * @property {string} redirectTokenizeMode
 * @property {string} redirectTokenizeUrl
 * @property {string} regionCode
 * @property {string} targetElement
 * @property {number} terminalId
 * @property {string} baseurl
 * @property {string} paymentExtraParam
 * @property {string} frameMode
 */
class Payment {
  /**
   * Constructor
   *
   * @param projectId Project ID
   * @param salt Secret salt
   * @param obj {Object} Configuration object
   * @param url {string} Base URL
   */
  constructor(projectId, salt, obj = {}, url = 'https://paymentpage.ecommpay.com') {
    this.salt = salt;
    this.baseURI = url;
    this.params = {
      project_id: projectId,
      interface_type: JSON.stringify({ id: 22 }),
    };

    // set up params via constructor
    Object.entries(obj).forEach(([key, val]) => {
      const desc = Object.getOwnPropertyDescriptor(Payment.prototype, key);
      if (desc && desc.set) {
        this[key] = val;
      } else {
        this.params[key] = val;
      }
    });

    // return Proxy for proper params setting
    return new Proxy(this, {
      set(object, prop, val) {
        const desc = Object.getOwnPropertyDescriptor(Payment.prototype, prop);
        if (desc && desc.set) {
          // eslint-disable-next-line no-param-reassign
          object[prop] = val;
        } else {
          // eslint-disable-next-line no-param-reassign
          object.params[prop.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()] = val;
        }
        return true;
      },
    });
  }

  /**
   * GET query string
   *
   * @returns {string} Query string
   */
  getQueryString() {
    return Object
      .keys(this.params)
      .map(key => `${key}=${encodeURIComponent(this.params[key])}`)
      .join('&');
  }

  /**
   * Get full URL
   *
   * @returns {string} URL for payment terminal
   */
  getUrl() {
    const signature = signer(this.params, this.salt);
    const params = this.getQueryString();

    return `${this.baseURI}/payment?${params}&signature=${encodeURIComponent(signature)}`;
  }

  /**
   * Set cashier predefined amounts
   *
   * @param {Object|string} values Array of predefined amounts
   */
  set cashierPredefinedAmounts(values) {
    this.params.cashier_predefined_amounts = Array.isArray(values) ? values.join(',') : values;
  }

  /**
   * Set cach voucher data according to FZ-54 (for Orange Data provider)
   *
   * @param {Object} data
   */
  set cashVoucherData(data) {
    this.params.cash_voucher_data = Buffer.from(JSON.stringify(data)).toString('base64');
  }
}

module.exports = Payment;
