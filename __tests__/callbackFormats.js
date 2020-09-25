const Callback = require('./mock/callback');
const { formats } = require('./data/callbackFormats');

Object.entries(formats).forEach(([key, value]) => {
  test(`Test callback format ${key}`, () => {
    const cb = new Callback('secret', value);
    expect(cb.getPaymentId()).toBeDefined();
    expect(cb.isPaymentSuccess()).toBeDefined();
  });
});
