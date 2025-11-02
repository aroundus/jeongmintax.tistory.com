import * as stylex from '@stylexjs/stylex';
import { GoMoveToTop as GoMoveToTopIcon } from 'react-icons/go';

import { sizes } from '@/shared/stylex/sizes.stylex';

export function ScrollToTopButton() {
  const handleClick = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      {...stylex.props(styles.container)}
      type="button"
      onClick={handleClick}
    >
      <GoMoveToTopIcon {...stylex.props(styles.icon)} />
    </button>
  );
}

const styles = stylex.create({
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
    margin: 'auto',
    width: sizes[24],
  },
});
