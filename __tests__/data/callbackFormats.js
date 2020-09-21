module.exports.formats = [
  {
    general: {
      customer_id: 'David Klein',
      project_id: 951,
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
  {
    general: {
      project_id: '[2] projectId',
    },
    request: {
      action: '[36] action',
      errors: '[38] errors',
      id: '[3] requestId',
      status: '[37] status',
    },
    customer: {
      id: '[18] userLogin',
    },
    token_status: '[71] status',
    token_created_at: '[70] created_at',
    token: '[68] tokenString',
  },
  {
    project_id: '[2] projectId',
    recurring: {
      id: '[100] id',
      status: '[101] status',
      type: '[102] type',
      currency: '[107] currency',
      exp_year: '[103] exp_year',
      exp_month: '[104] exp_month',
      period: '[105] period',
      time: '[106] time',
    },
  },
  {
    redirectData: '[113] redirectData',
    payment: {
      id: '[40] paymentId',
    },
  },
  {
    general: {
      project_id: 951,
    },
    payment: {
      id: 'checkSalePayout_2020',
      type: 'purchase',
      status: 'success',
      date: '2020-08-24T07:44:44+0000',
      method: 'card',
      sum: {
        amount: 1000,
        currency: 'RUB',
      },
      description: 'Успешная оплата',
    },
    account: {
      number: '400002******1488',
      token: 'f8c2c15af1eb3df89bf39e',
      type: 'visa',
      id: 231664,
      card_holder: 'TOKEN TESTER',
      expiry_month: '05',
      expiry_year: '2025',
    },
    customer: {
      id: 'David Klein',
      phone: '79607201210',
    },
    decision: {
      message: 'Transaction has been checked by RCS',
    },
    operation: {
      id: 9754253,
      type: 'sale',
      status: 'success',
      date: '2020-08-24T07:44:44+0000',
      created_date: '2020-08-24T07:44:41+0000',
      request_id: 'a3d2c0827611-00009755',
      sum_initial: {
        amount: 1000,
        currency: 'RUB',
      },
      sum_converted: {
        amount: 1000,
        currency: 'RUB',
      },
      code: '0',
      message: 'Success',
      eci: '07',
      provider: {
        id: 3,
        payment_id: '15982550832800',
        auth_code: '563253',
        endpoint_id: 'test',
        date: '2020-08-24T07:44:44+0000',
      },
    },
    signature: '',
  },
];
