const fibonacci = require('../fibonacci');

describe('Fibonacci Algorithm', () => {
  it('should generate a sequence of 5 numbers', () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3, 5]);
  });

  it('should generate a sequence of 10 numbers', () => {
    expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });

  it('should return [0, 1] for n=1', () => {
    expect(fibonacci(1)).toEqual([0, 1]);
  });

  it('should return [0] for n=0', () => {
    expect(fibonacci(0)).toEqual([0]);
  });
});