import { suma } from './index';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(suma(1, 2)).toBe(3);
  });
});
