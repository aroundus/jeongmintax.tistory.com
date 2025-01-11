import { useEffect, useState } from 'react';

import * as stylex from '@stylexjs/stylex';
import { throttle } from 'lodash-es';
import { GoMoveToTop as GoMoveToTopIcon } from 'react-icons/go';

import { sizes } from '@/shared/stylex/sizes.stylex';

export function FloatingScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    function handleScroll() {
      const { clientHeight, scrollTop } = document.documentElement;

      setIsVisible(scrollTop > clientHeight);
    }

    const throttledScroll = throttle(handleScroll, 50);

    handleScroll();
    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return (
    <div {...stylex.props(styles.container)}>
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
    right: sizes[24],
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
