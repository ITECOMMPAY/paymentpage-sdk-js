function reducer(obj, prefix = '', ignored = []) {
  const ordered = {};

  Object.keys(obj).sort().forEach((key) => {
    if (ignored.indexOf(key) === -1) {
      ordered[key] = obj[key];
    }
  });

  return Object.entries(ordered).reduce((acc, [prop, value]) => {
    if (value === null) {
      // eslint-disable-next-line no-param-reassign
      value = '';
    }
    if (typeof value === 'object') {
      return acc + reducer(value, prefix ? `${prefix}:${prop}` : prop, ignored);
    }
    // eslint-disable-next-line no-param-reassign
    if (typeof value === typeof true) value = value ? 1 : 0;
    return acc + (prefix ? `${prefix}:${prop}:${value};` : `${prop}:${value};`);
  }, '');
}

module.exports = (obj, ignored = []) => reducer(obj, '', ignored).slice(0, -1);
