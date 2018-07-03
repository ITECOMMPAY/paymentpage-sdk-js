'use strict';

const tap = require('tap');
const converter = require('../src/converter');

const obj = {
    a: {
        b: 1,
        c: 2
    },
    d: false,
    f: [
        'g',
        {
            h: 7,
            i: {
                k: 8
            }
        }
    ],
    e: [
        4,
        5
    ]
};

tap.equal(
    converter(obj),
    'a:b:1;a:c:2;d:0;e:0:4;e:1:5;f:0:g;f:1:h;f:1:i'
);
