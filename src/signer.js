const crypto = require('crypto');
const converter = require('./converter');

const ignored = ['frame_mode'];

module.exports = (obj, salt) => {
  const hmac = crypto.createHmac('sha512', salt);
  hmac.update(converter(obj, ignored));
  return hmac.digest('base64');
};
