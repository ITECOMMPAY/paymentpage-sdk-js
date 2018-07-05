const signer = require('./src/signer');

/**
 * Ecommpay
 */
class ECP {
  /**
     * Constructor
     *
     * @param projectId Project ID
     * @param salt Secret salt
     * @param url Base URL
     */
  constructor(projectId, salt, url = 'https://paymentpage.ecommpay.com') {
    this.salt = salt;
    this.baseURI = url;
    this.params = {
      project_id: projectId,
    };
  }

  getQueryString() {
    return Object.keys(this.params).map(key => `${key}=${this.params[key]}`).join('&');
  }

  getUrl() {
    const signature = signer(this.params, this.salt);
    const params = this.getQueryString();

    return `${this.baseURI}/payment?${params}&signature=${signature}`;
  }

  set accountToken(val) {
    this.params.account_token = val;
  }

  set bestBefore(val) {
    this.params.best_before = val;
  }

  set cardOperationType(val) {
    this.params.card_operation_type = val;
  }

  set cashierDefaultMode(val) {
    this.params.cashier_default_mode = val;
  }

  set cashierForceMode(val) {
    this.params.cashier_force_mode = val;
  }

  set cashierManualInput(val) {
    this.params.cashier_manual_input = val;
  }

  set cashierMaxValue(val) {
    this.params.cashier_max_value = val;
  }

  set cashierMinValue(val) {
    this.params.cashier_min_value = val;
  }

  set cashierPredefinedAmounts(val) {
    this.params.cashier_predefined_amounts = Array.isArray(val) ? val.join(',') : val;
  }

  set closeOnMissclick(val) {
    this.params.close_on_missclick = val;
  }

  set cssModalWrap(val) {
    this.params.css_modal_wrap = val;
  }

  set customerId(val) {
    this.params.customer_id = val;
  }

  set forceAcsNewWindow(val) {
    this.params.force_acs_new_window = val;
  }

  set forcePaymentMethod(val) {
    this.params.force_payment_method = val;
  }

  set languageCode(val) {
    this.params.language_code = val;
  }

  set listPaymentBlock(val) {
    this.params.list_payment_block = val;
  }

  set merchantFailUrl(val) {
    this.params.merchant_fail_url = val;
  }

  set merchantSuccessUrl(val) {
    this.params.merchant_success_url = val;
  }

  set mode(val) {
    this.params.mode = val;
  }

  set paymentAmount(val) {
    this.params.payment_amount = val;
  }

  set paymentCurrency(val) {
    this.params.payment_currency = val;
  }

  set paymentDescription(val) {
    this.params.payment_description = val;
  }

  set paymentId(val) {
    this.params.payment_id = val;
  }

  set recurringRegister(val) {
    this.params.recurring_register = val;
  }

  set customerFirstName(val) {
    this.params.customer_first_name = val;
  }

  set customerLastName(val) {
    this.params.customer_last_name = val;
  }

  set customerPhone(val) {
    this.params.customer_phone = val;
  }

  set customerEmail(val) {
    this.params.customer_email = val;
  }

  set customerCountry(val) {
    this.params.customer_country = val;
  }

  set customerState(val) {
    this.params.customer_state = val;
  }

  set customerCity(val) {
    this.params.customer_city = val;
  }

  set customerDayOfBirth(val) {
    this.params.customer_day_of_birth = val;
  }

  set customerSsn(val) {
    this.params.customer_ssn = val;
  }

  set billingPostal(val) {
    this.params.billing_postal = val;
  }

  set billingCountry(val) {
    this.params.billing_country = val;
  }

  set billingRegion(val) {
    this.params.billing_region = val;
  }

  set billingAddress(val) {
    this.params.billing_address = val;
  }

  set redirect(val) {
    this.params.redirect = val;
  }

  set redirectFailMode(val) {
    this.params.redirect_fail_mode = val;
  }

  set redirectFailUrl(val) {
    this.params.redirect_fail_url = val;
  }

  set redirectOnMobile(val) {
    this.params.redirect_on_mobile = val;
  }

  set redirectSuccessMode(val) {
    this.params.redirect_success_mode = val;
  }

  set redirectSuccessUrl(val) {
    this.params.redirect_success_url = val;
  }

  set redirectTokenizeMode(val) {
    this.params.redirect_tokenize_mode = val;
  }

  set redirectTokenizeUrl(val) {
    this.params.redirect_tokenize_url = val;
  }

  set regionCode(val) {
    this.params.region_code = val;
  }

  set targetElement(val) {
    this.params.target_element = val;
  }

  set terminalId(val) {
    this.params.terminal_id = val;
  }

  set baseurl(val) {
    this.params.baseurl = val;
  }

  set paymentExtraParam(val) {
    this.params.payment_extra_param = val;
  }
}

module.exports = ECP;
