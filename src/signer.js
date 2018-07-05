const crypto = require('crypto');
const converter = require('./converter');

module.exports = (obj, salt) => {
  const hmac = crypto.createHmac('sha512', salt);
  hmac.update(converter(obj));
  return hmac.digest('base64');
};
