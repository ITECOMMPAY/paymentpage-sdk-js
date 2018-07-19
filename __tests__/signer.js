const signer = require('../src/signer');
const { secret, signature, data } = require('./data/signed');

test('Test signature is correct', () => {
  expect(signer(data, secret)).toBe(signature);
});
