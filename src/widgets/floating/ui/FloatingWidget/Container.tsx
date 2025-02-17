import { useEffect, useState } from 'react';

import * as stylex from '@stylexjs/stylex';
import { throttle } from 'lodash-es';

import { sizes } from '@/shared/stylex/sizes.stylex';

interface ContainerProps {
  children: React.ReactNode;
  target: HTMLElement | null;
}

export function Container({ children, target }: ContainerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [xOffset, setXOffset] = useState<number | null>(0);

  useEffect(() => {
    if (target === null) {
      return;
    }

    const handleScroll = () => {
      const { clientHeight, clientWidth, scrollTop } = document.documentElement;
      setIsVisible(scrollTop > clientHeight);

      const targetRect = target.getBoundingClientRect();
      const contentWidth = targetRect.left + targetRect.width;

      if (contentWidth < clientWidth - 56 - 24) {
        setXOffset(contentWidth);
      } else {
        setXOffset(null);
      }
    };

    const throttledScroll = throttle(handleScroll, 50);

    handleScroll();
    ['resize', 'orientationChange', 'scroll'].forEach((type) => {
      window.addEventListener(type, throttledScroll);
    });

    return () => {
      ['resize', 'orientationChange', 'scroll'].forEach((type) => {
        window.removeEventListener(type, throttledScroll);
      });
    };
  }, [target]);

  return (
    <>
      {isVisible && (
        <div
          {...stylex.props(styles.container)}
          style={{ left: xOffset || undefined, right: xOffset === null ? sizes[24] : undefined }}
        >
          {children}
        </div>
      )}
    </>
  );
}

const styles = stylex.create({
  container: {
    bottom: sizes[24],
    gap: sizes[16],
    position: 'fixed',
    zIndex: 3,
  },
});
