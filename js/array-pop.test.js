import { myPop } from './array-pop.js';

describe('Given array-pop', () => {
  test('should return the last element of an array', () => {
    const testData = [1, 5, 'ivana', 'julieta'];
    const expected = elementToPop;
    const result = myPop(testData);
    expect(result).toBe(expected);
  });
});
