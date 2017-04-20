const findMaxValue = require('./max-value');

describe('findMaxValue', function() {
  it('find max value in object', function() {
    const object = {
      a: 1,
      b: 0,
      c: 10,
      d: 16,
      e: 2
    };
    const result = findMaxValue(object);
    expect(result).toBe(16);
  });
});
