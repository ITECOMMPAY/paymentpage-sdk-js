const converter = require('../src/converter');

const obj = {
  a: {
    b: 1,
    c: 2,
  },
  d: false,
  f: [
    'g',
    {
      h: 7,
      i: {
        k: 8,
      },
    },
  ],
  e: [
    4,
    5,
  ],
};

test('Test converting object to string for signature', () => {
  expect(converter(obj)).toBe('a:b:1;a:c:2;d:0;e:0:4;e:1:5;f:0:g;f:1:h:7;f:1:i:k:8');
});
