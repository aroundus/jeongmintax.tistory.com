import { describe, expect, test } from 'vitest';

import { truncateWithPeriod } from '../string';

describe('truncateWithPeriod', () => {
  test('제한 길이를 넘지 않는 경우 원본 문자열을 반환합니다.', () => {
    const text = '이 문자열은 제한 길이보다 짧습니다.';
    const limit = 50;

    const result = truncateWithPeriod(text, limit);

    expect(result).toBe(text);
  });

  test('마침표가 없는 경우 제한 길이까지 문자열을 자릅니다.', () => {
    const text = '이 문자열은 마침표가 없습니다 제한 길이까지 잘라야 합니다';
    const limit = 20;

    const result = truncateWithPeriod(text, limit);

    expect(result).toBe('이 문자열은 마침표가 없습니다 제한');
  });

  test('마침표가 있지만 제한 길이 내에 없는 경우 문자열을 제한 길이까지 자릅니다.', () => {
    const text = '이 문자열에는 마침표가 있습니다. 하지만 제한 길이 내에는 없습니다';
    const limit = 10;

    const result = truncateWithPeriod(text, limit);

    expect(result).toBe('이 문자열에는 마침');
  });

  test('제한 길이 내 마침표 뒤에 공백 없이 시작하는 문자열이 있는 경우 잘라냅니다.', () => {
    const text =
      '중소기업을 창업하는 경우 창업 후 5년 동안 세금을 최대 100%까지 감면받을 수 있는 창업중소기업 세액감면 제도에 대해 알아보겠습니다.창업창업이란 중소기업을 새로 설립하고 사업을 시작하는 것을 말합니다.창업일중소기업의 창업일은 창업자가 법인인 경우 법인 설립 등기일, 개인인 경우';
    const limit = 150;

    const result = truncateWithPeriod(text, limit);

    expect(result).toBe(
      '중소기업을 창업하는 경우 창업 후 5년 동안 세금을 최대 100%까지 감면받을 수 있는 창업중소기업 세액감면 제도에 대해 알아보겠습니다.',
    );
  });
});
