# EcommPay Javascript package

[![Build Status](https://travis-ci.org/zhukovra/ecp-signer-js.svg?branch=master)](https://travis-ci.org/zhukovra/ecp-signer-js)
[![Test Coverage](https://api.codeclimate.com/v1/badges/427914fe0481b93241da/test_coverage)](https://codeclimate.com/github/zhukovra/ecp-signer-js/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/427914fe0481b93241da/maintainability)](https://codeclimate.com/github/zhukovra/ecp-signer-js/maintainability)

### What is it?

It is package that will help you with generating payment URL according to 
[EcommPay documentation](https://developers.ecommpay.com/en/en_PP_Integration.html).

### How to use?

#### Get payment page URL

1. Install the package (with your package manager):
```shell
npm install ecommpay
yarn add ecommpay
```

2. Require somewhere in your code, set parameters and get the URL:
```javascript
const { Payment } = require('ecommpay');

// create ECP object with your account ID and secret salt
const e = new Payment('112', 'my_secret');

// set payment details 
e.paymentAmount = 1000;
e.paymentId = 'FFCD12-30';
e.paymentCurrency = 'USD';

// set another parameters, like success or fail callback URL, customer details, etc.

// get payment URL
const url = e.getUrl();
```

Now your can render payment `url` somewhere on your checkout page.

#### Receive callback from Ecommpay

Example with [Express](http://expressjs.com):
```javascript
const { Callback } = require('ecommpay');

app.post('/payment/callback', function(req, res) {
  const callback = new Callback(req.body);
  if (callback.isPaymentSuccess()) {
    const paymentId = callback.getPaymentId();
    // here is your code for success payment
  }
});
```
