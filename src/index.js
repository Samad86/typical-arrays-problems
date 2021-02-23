exports.min = function min(array) {
    if (!array) return 0;
    return array.length ? Math.min(...array) : 0;
};

exports.max = function max(array) {
    if (!array) return 0;
    return array.length ? Math.max(...array) : 0;
};

exports.avg = function avg(array) {
    if (!array) return 0;
    return array.length
        ? array.reduce((acc, elem) => acc + elem, 0) / array.length
        : 0;
};
