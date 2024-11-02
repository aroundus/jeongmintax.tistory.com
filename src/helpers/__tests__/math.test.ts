import { describe, expect, test } from 'vitest';
import fc from 'fast-check';

import { getRandomNumber } from '../math';

describe('getRandomNumber', () => {
  test('무작위 숫자를 반환하는지 확인합니다.', () => {
    const result = getRandomNumber();
    expect(typeof result).toBe('number');
  });

  test('1~9 사이의 digit 값을 제공한 경우 반환하는 숫자가 0 이상이며 10^${digit} 미만인지 확인합니다.', () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 9 }), (digit) => {
        const result = getRandomNumber(digit);

        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThan(Math.pow(10, digit));
      }),
    );
  });

  test('digit 값을 제공하지 않은 경우 반환하는 숫자가 0 이상이며 10^10 미만인지 확인합니다.', () => {
    const result = getRandomNumber();

    expect(result).toBeGreaterThanOrEqual(0);

    const maxDigit = 10;
    const maxResult = Math.pow(10, maxDigit);

    expect(result).toBeLessThan(maxResult);
  });
});
