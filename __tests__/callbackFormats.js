const Callback = require('./mock/callback');
const { formats } = require('./data/callbackFormats');

test('Test PaymentId is not undefined', () => {
  formats.forEach((element) => {
    const cb = new Callback('secret', element);
    expect(cb.getPaymentId()).toBeDefined();
    expect(cb.isPaymentSuccess()).toBeDefined();
  });
});
