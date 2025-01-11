import { describe, expect, test, vi } from 'vitest';

import { cloneEventListeners } from '../element';
import type { ExtendedHTMLElement } from '../element';

describe('cloneEventListeners', () => {
  test('원본 요소의 클릭 이벤트 리스너를 대상 요소로 복제합니다.', () => {
    const sourceElement = document.createElement('div');
    const targetElement = document.createElement('div');

    const mockListener = vi.fn();
    sourceElement.addEventListener('click', mockListener);

    (sourceElement as ExtendedHTMLElement).__events = {
      click: [mockListener],
    };

    cloneEventListeners(sourceElement, targetElement);
    targetElement.dispatchEvent(new Event('click'));
    expect(mockListener).toHaveBeenCalled();
  });

  test('원본 요소의 자식 요소들의 이벤트 리스너를 대상 요소의 자식 요소로 복제합니다.', () => {
    const sourceElement = document.createElement('div');
    const sourceChild = document.createElement('div');

    sourceElement.appendChild(sourceChild);

    const targetElement = document.createElement('div');
    const targetChild = document.createElement('div');

    targetElement.appendChild(targetChild);

    const mockListener = vi.fn();
    sourceChild.addEventListener('click', mockListener);

    (sourceChild as ExtendedHTMLElement).__events = {
      click: [mockListener],
    };

    cloneEventListeners(sourceElement, targetElement);
    targetChild.dispatchEvent(new Event('click'));
    expect(mockListener).toHaveBeenCalled();
  });
});
