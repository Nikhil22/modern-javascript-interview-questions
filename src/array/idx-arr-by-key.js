function indexArrayByKey(arr) {
  return arr.reduce((accumulator, element) => {
    accumulator[element.key] = element.value;
    return accumulator;
  }, {});
}
module.exports = indexArrayByKey;
