module.exports.secret = 'secret';

// Short callback body example.
// During the INC-8046 decision,
// a test was added to cut the __proto__ object.
module.exports.data = {
  payment: {
    id: '000049',
    status: 'success',
    __proto__: {
      id: '000050',
      status: 'decline',
      description: 'Prototype payload description',
    },
  },
  signature: '/3TrhHVz9BHaLfgLyhoxO7dsQNzbzZa/TdO3pxQocXWwgVM6tGlzMLVfpOxFNTnkR9iiFVK/77ZedMcbkCjmng==',
};
