const indexArrayByKey = require('./idx-arr-by-key');
const flattenNestedArray = require('./flatten-nested-array');

describe('indexArrayByKey', function() {
  it('should index (i.e create an object out of) the array by a "key"', function() {
    const array = [
      {key: 'a', value: 1},
      {key: 'b', value: 2}
    ];
    const result = indexArrayByKey(array);
    expect(result).toEqual({
      a: 1,
      b: 2
    });
  });
});

describe('flattenNestedArray', function() {
  it('should flatten an array of arbitrary nestings', function() {
    const array = [
      [1,2,[5,6,[7]]],
      [2,3,4,[5,6]],
      7,
      8,
      [9],
      [[10]]
    ];
    const result = flattenNestedArray(array);
    expect(result).toEqual([
      1,2,5,6,7,2,3,4,5,6,7,8,9,10
    ]);
  });
});
