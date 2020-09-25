module.exports.formats = {
  9: {
    general: {
      customer_id: 'David Klein',
      project_id: 100,
      signature: '',
    },
    request: {
      id: '426bf258-00000003',
      status: 'success',
    },
    token: 'd44600b',
    token_created_at: '2019-10-18T08:10:36+0000',
    token_status: 'active',
  },
  2: {
    general: {
      project_id: 100,
      signature: '',
    },
    request: {
      id: '426bf258cd',
      status: 'success',
    },
    token: 'd44600b',
    token_created_at: '2019-10-18T08:10:36+0000',
    token_status: 'active',
  },
  1: {
    project_id: 100,
    payment: {
      id: '30338174',
      type: 'purchase',
      status: 'success',
      date: '2020-08-24T07:44:44+0000',
      method: 'card',
      sum: {
        amount: 1000,
        currency: 'RUB',
      },
      description: 'Успешная оплата по не 3ds-ой карте',
    },
    account: {
      number: '400002******1488',
      token: 'f8c2c15af1',
      type: 'visa',
      id: 100,
      card_holder: 'TOKEN TESTER',
      expiry_month: '05',
      expiry_year: '2025',
    },
    customer: {
      id: 'David Klein',
      phone: '100',
    },
    decision: {
      message: 'Transaction has been checked by RCS',
    },
    operation: {
      id: 100,
      type: 'sale',
      status: 'success',
      date: '2020-08-24T07:44:44+0000',
      created_date: '2020-08-24T07:44:41+0000',
      request_id: 'a3d2c082761',
      sum_initial: {
        amount: 100,
        currency: 'RUB',
      },
      sum_converted: {
        amount: 100,
        currency: 'RUB',
      },
      code: '0',
      message: 'Success',
      eci: '07',
      provider: {
        id: 3,
        payment_id: '159825508',
        auth_code: '563253',
        endpoint_id: 'test',
        date: '2020-08-24T07:44:44+0000',
      },
    },
    signature: '',
  },
  161: {
    sum_request: {
      amount: 100,
      currency: 'USD',
    },
    payment: {
      cascading_with_redirect: false,
      is_new_attempts_available: false,
      attempts_timeout: 0,
      status: 'success',
      id: '100',
      method: 'card',
      date: '2020-08-24T11:53:51+0000',
      result_code: '0',
      result_message: 'Success',
      split_with_redirect: false,
      provider_id: 100,
    },
    rrn: '100',
    AuthCode: '100',
    account: {
      number: '400002******1488',
      token: '5cc73393381c',
      type: 'visa',
      card_holder: 'TEST USER',
      expiry_month: '11',
      expiry_year: '2022',
    },
    customer: {
      id: '100',
    },
    request_id: '35e79897224cdc',
    transaction: {
      id: 100,
      date: '2020-08-24T11:53:51+0000',
      type: 'purchase',
    },
    sum_real: {
      amount: 100,
      currency: 'USD',
    },
    general: {
      project_id: 100,
      payment_id: '100',
      signature: '',
    },
    description: '',
    operations: [
      {
        id: 100,
        type: 'sale',
        status: 'success',
        date: '2020-08-24T11:53:51+0000',
        processing_time: '2020-08-24T11:53:50+0000',
        request_id: '35e79897224cd',
        sum: {
          amount: 100,
          currency: 'USD',
        },
        code: '0',
        message: 'Success',
      },
    ],
    return_url: 'https://pay.test.com/acs_callback',
  },
  69: {
    redirectData: {
      method: 'GET',
      body: [],
      encrypted: [],
      url: 'https://pay.test.com/acs_callback',
    },
    payment: {
      id: '100',
    },
    general: {
      signature: '',
    },
  },
  73: {
    card: {
      number: '400002******1488',
      exp_month: 5,
      exp_year: 2024,
      holder: 'Test User',
    },
    general: {
      project_id: 100,
      signature: '',
    },
    request: {
      id: '18c4b5a13d7',
      action: 'tokenize',
      status: 'success',
    },
    customer: {
      id: '0c26aef6',
    },
    token: '759a1ac5',
    token_status: 'active',
    token_created_at: '2020-08-24T14:14:23+0000',
  },
};
