const Payment = require('../src/payment');

test('Object', () => {
  const e = new Payment(121, 'secret', { cashierPredefinedAmounts: [1, 2], mode: 'cachier' }, 'http://baseurl');
  expect(e.getQueryString()).toBe('project_id=121&interface_type=%7B%22id%22%3A22%7D&cashier_predefined_amounts=1%2C2&mode=cachier');
});

const e = new Payment(121, 'secret', {}, 'http://baseurl');

test('Test ECP.getQueryString', () => {
  expect(e.getQueryString()).toBe('project_id=121&interface_type=%7B%22id%22%3A22%7D');
});

test('Test ECP.getUrl', () => {
  const trimmedUrl = e.getUrl().replace(/&signature=.*$/, '');
  expect(trimmedUrl).toBe(`http://baseurl/payment?${e.getQueryString()}`);
});

test('Test signature is urlencoded', () => {
  const url = e.getUrl();
  expect(url.split('=').pop().match(/[ +=,;]/)).toBeNull();
});

test('Test ECP setters', () => {
  e.accountToken = 1;
  e.bestBefore = 1;
  e.cardOperationType = 'sale';
  e.cashierDefaultMode = 'withdrawal';
  e.cashierForceMode = 'deposit';
  e.cashierManualInput = 1;
  e.cashierMaxValue = 500;
  e.cashierMinValue = 100;
  e.cashierPredefinedAmounts = [10, 20, 30];
  e.cashVoucherData = { voucher: 'ваучер' };
  e.closeOnMissclick = true;
  e.cssModalWrap = 'modal-popup';
  e.customerId = 'customer_341';
  e.forceAcsNewWindow = true;
  e.forcePaymentMethod = 'card';
  e.languageCode = 'RU';
  e.listPaymentBlock = 'payment_method';
  e.merchantFailUrl = '';
  e.merchantSuccessUrl = '';
  e.mode = 'cachier';
  e.paymentAmount = 1000;
  e.paymentCurrency = 'USD';
  e.paymentDescription = 'Order 123';
  e.paymentId = 'OF1';
  e.recurringRegister = true;
  e.customerFirstName = 'Name';
  e.customerLastName = 'Surname';
  e.customerPhone = '1234567';
  e.customerEmail = 'test@email.com';
  e.customerCountry = 'RU';
  e.customerState = 'M obl';
  e.customerCity = 'Moscow';
  e.customerDayOfBirth = '12-12-1290';
  e.customerSsn = '123';
  e.billingPostal = '123';
  e.billingCountry = 'RU';
  e.billingRegion = 'M obl';
  e.billingAddress = 'Lubyanka, 19';
  e.redirect = false;
  e.redirectFailMode = 'parent_page';
  e.redirectFailUrl = 'http://';
  e.redirectOnMobile = false;
  e.redirectSuccessMode = 'parent_page';
  e.redirectSuccessUrl = 'http://';
  e.redirectTokenizeMode = 'parent_page';
  e.redirectTokenizeUrl = 'http://';
  e.regionCode = 'ru';
  e.targetElement = 'pay_button_id';
  e.terminalId = '54';
  e.baseurl = 'domain.com';
  e.paymentExtraParam = 1;
  e.frameMode = 'popup';

  const obj = {
    account_token: 1,
    baseurl: 'domain.com',
    best_before: 1,
    billing_address: 'Lubyanka, 19',
    billing_country: 'RU',
    billing_postal: '123',
    billing_region: 'M obl',
    card_operation_type: 'sale',
    cashier_default_mode: 'withdrawal',
    cashier_force_mode: 'deposit',
    cashier_manual_input: 1,
    cashier_max_value: 500,
    cashier_min_value: 100,
    cashier_predefined_amounts: '10,20,30',
    cash_voucher_data: 'eyJ2b3VjaGVyIjoi0LLQsNGD0YfQtdGAIn0=',
    close_on_missclick: true,
    css_modal_wrap: 'modal-popup',
    customer_city: 'Moscow',
    customer_country: 'RU',
    customer_day_of_birth: '12-12-1290',
    customer_email: 'test@email.com',
    customer_first_name: 'Name',
    customer_id: 'customer_341',
    customer_last_name: 'Surname',
    customer_phone: '1234567',
    customer_ssn: '123',
    customer_state: 'M obl',
    interface_type: '{"id":22}',
    force_acs_new_window: true,
    force_payment_method: 'card',
    language_code: 'RU',
    list_payment_block: 'payment_method',
    merchant_fail_url: '',
    merchant_success_url: '',
    mode: 'cachier',
    payment_amount: 1000,
    payment_currency: 'USD',
    payment_description: 'Order 123',
    payment_extra_param: 1,
    payment_id: 'OF1',
    project_id: 121,
    recurring_register: true,
    redirect: false,
    redirect_fail_mode: 'parent_page',
    redirect_fail_url: 'http://',
    redirect_on_mobile: false,
    redirect_success_mode: 'parent_page',
    redirect_success_url: 'http://',
    redirect_tokenize_mode: 'parent_page',
    redirect_tokenize_url: 'http://',
    region_code: 'ru',
    target_element: 'pay_button_id',
    terminal_id: '54',
    frame_mode: 'popup',
  };
  expect(e.params).toEqual(obj);
});
