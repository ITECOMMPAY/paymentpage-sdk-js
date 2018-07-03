'use strict';

module.exports = (obj) => {
    return reducer(obj).slice(0, -1);
};

function reducer(obj, prefix = '', level = 1) {
    const ordered = {};
    Object.keys(obj).sort().forEach(function (key) {
        ordered[key] = obj[key];
    });

    return Object.entries(ordered).reduce((acc, [prop, value]) => {
        if (level === 3) {
            return acc + `${prefix}:${prop};`;
        } else if (level > 3) {
            return acc;
        }
        if (typeof value === 'object') {
            if (Array.isArray(value)) {
                return acc + reducer(value, prop, level + 1);
            }
            return acc + reducer(value, prefix ? `${prefix}:${prop}` : prop, level + 1);
        }
        if (typeof value === typeof true) value = value ? 1 : 0;
        return acc + (prefix ? `${prefix}:${prop}:${value};` : `${prop}:${value};`);
    }, '')
}
