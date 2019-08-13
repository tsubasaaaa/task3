import { fibonacci1 } from '../task3';

describe('フィボナッチ数列', () => {
  test('4番目のフィボナッチ数の取得', () => {
    expect(fibonacci1(4)).toBe(3);
  });

  test('50番目のフィボナッチ数の取得', () => {
    expect(fibonacci1(50)).toBe(12586269025);
  });
});

import { fibonacci2 } from '../task3';

describe('フィボナッチ数列', () => {
  const expected = [1,1,2,3,5,8,13,21,34,55,89,144];
  test('任意の数のフィボナッチ数の取得', () => {
    expect(fibonacci2(12)).toEqual(expected);
  });
});