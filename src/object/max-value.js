'use strict';

function findMaxValue(obj) {
  let max = Number.MIN_VALUE;
  return Object.keys(obj).reduce((prevKey, currKey) => {
    max = Math.max(max, obj[currKey]);
    return max;
  }, max);
}
module.exports = findMaxValue;
