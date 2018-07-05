function reducer(obj, prefix = '', level = 1) {
  const ordered = {};

  Object.keys(obj).sort().forEach((key) => {
    ordered[key] = obj[key];
  });

  return Object.entries(ordered).reduce((acc, [prop, value]) => {
    if (level === 3) {
      return `${acc}${prefix}:${prop};`;
    }
    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        return acc + reducer(value, prop, level + 1);
      }
      return acc + reducer(value, prefix ? `${prefix}:${prop}` : prop, level + 1);
    }
    // eslint-disable-next-line no-param-reassign
    if (typeof value === typeof true) value = value ? 1 : 0;
    return acc + (prefix ? `${prefix}:${prop}:${value};` : `${prop}:${value};`);
  }, '');
}

module.exports = obj => reducer(obj).slice(0, -1);
