import * as stylex from '@stylexjs/stylex';
import { GoChevronLeft as GoChevronLeftIcon } from 'react-icons/go';

import { mixinStyles } from '@/shared/stylex';
import { sizes } from '@/shared/stylex/sizes.stylex';

interface GoNextPageButtonProps {
  path: string;
}

export function GoPrevPageButton({ path }: GoNextPageButtonProps) {
  const handleClick = () => {
    window.location.href = path;
  };

  return (
    <button
      {...stylex.props(styles.container)}
      type="button"
      onClick={handleClick}
    >
      <GoChevronLeftIcon {...stylex.props(styles.icon)} />
      <span {...stylex.props(mixinStyles.font(12, 700))}>{path.split('=')[1]} 페이지</span>
    </button>
  );
}

const styles = stylex.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'Canvas',
    borderColor: 'CanvasText',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    color: 'CanvasText',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    height: sizes[56],
    justifyContent: 'center',
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
