function flattenNestedArray(arr) {
  return arr.reduce((accumulator, element) => {
    return accumulator.concat(
      Array.isArray(element) ? flattenNestedArray(element): element
    );
  }, []);
}
module.exports = flattenNestedArray;
