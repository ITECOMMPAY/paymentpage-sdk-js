const Callback = require('../src/callback');
const { secret, data } = require('./data/callback');

const cb = new Callback(secret, data);

test('Property setting', () => {
  expect(cb.callback.payment.id).toBe('000049');
});

test('Signature validation', () => {
  expect(cb.isValid()).toBeTruthy();
});

test('Constructor error', () => {
  // eslint-disable-next-line no-new
  expect(() => { new Callback('wrong', data); }).toThrow('Invalid signature');
});

test('String in constructor', () => {
  expect((new Callback(secret, JSON.stringify(data))).callback.payment.id).toBe('000049');
});

test('Callback.isPaymentSuccess', () => {
  expect(cb.isPaymentSuccess()).toBeTruthy();
});

test('Callback.getPaymentId', () => {
  expect(cb.getPaymentId()).toBe('000049');
});
