import { useEffect, useState } from 'react';

import * as stylex from '@stylexjs/stylex';
import { throttle } from 'lodash-es';
import { GoMoveToTop as GoMoveToTopIcon } from 'react-icons/go';

import { sizes } from '@/shared/stylex/sizes.stylex';

interface FloatingScrollToTopButtonProps {
  target: HTMLElement | null;
}

export function FloatingScrollToTopButton({ target }: FloatingScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [xOffset, setXOffset] = useState<number | null>(0);

  const handleClick = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

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
    <div
      {...stylex.props(styles.container)}
      style={{ left: xOffset || undefined, right: xOffset === null ? sizes[24] : undefined }}
    >
      {isVisible && (
        <button
          {...stylex.props(buttonStyles.container)}
          type="button"
          onClick={handleClick}
        >
          <GoMoveToTopIcon {...stylex.props(buttonStyles.icon)} />
        </button>
      )}
    </div>
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

const buttonStyles = stylex.create({
  container: {
    backgroundColor: 'Canvas',
    borderColor: 'CanvasText',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    color: 'CanvasText',
    cursor: 'pointer',
    height: sizes[56],
    opacity: {
      default: 0.5,
      ':hover': {
        '@media (hover: hover)': 1,
      },
    },
    transition: 'opacity 200ms ease',
    width: sizes[56],
  },
  icon: {
    height: sizes[24],
    width: sizes[24],
  },
});
