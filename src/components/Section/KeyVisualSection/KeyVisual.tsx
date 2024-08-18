import * as stylex from '@stylexjs/stylex';

import { Button } from '@/components';
import type { CoverItem } from '@/data/cover';
import { useIsMobile } from '@/hooks';
import { mixinStyles } from '@/styles';
import { color } from '@/styles/color.stylex';
import { keyframes } from '@/styles/keyframes.stylex';
import { size } from '@/styles/size.stylex';

interface KeyVisualProps {
  coverItem: CoverItem;
  isGradientEnabled?: boolean;
}

export function KeyVisual({ coverItem, isGradientEnabled }: KeyVisualProps) {
  const isMobile = useIsMobile();

  return (
    <div
      {...stylex.props(styles.container, isGradientEnabled && styles.isGradientEnabled)}
      key={coverItem.path}
      style={{ backgroundImage: `url(${coverItem.thumbnailURL})` }}
    >
      <div {...stylex.props(styles.inner, mixinStyles.absoluteCenter())}>
        <a
          {...stylex.props(styles.category, mixinStyles.font(16, 500))}
          href={coverItem.categoryPath}
        >
          #{coverItem.category}
        </a>
        <h2 {...stylex.props(styles.title, mixinStyles.font(isMobile ? 36 : 48, 700))}>{coverItem.title}</h2>
        <p>{coverItem.summary.length < 120 ? coverItem.summary : `${coverItem.summary.slice(0, 120)}...`}</p>
        <div {...stylex.props(styles.date)}>{coverItem.date}</div>
        <Button
          color="primary"
          variant="outlined"
          size="lg"
          style={styles.button}
          onClick={() => {
            location.href = coverItem.path;
          }}
        >
          내용 읽기
        </Button>
      </div>
    </div>
  );
}

const styles = stylex.create({
  container: {
    background: 'no-repeat center / cover',
    backgroundColor: {
      '::before': color.black,
    },
    backgroundSize: {
      '::before': '400% 400%',
    },
    bottom: {
      '::before': 0,
    },
    content: {
      '::before': '', // eslint-disable-line
    },
    height: 600,
    left: {
      '::before': 0,
    },
    opacity: {
      '::before': 0.5,
    },
    position: {
      default: 'relative',
      '::before': 'absolute',
    },
    right: {
      '::before': 0,
    },
    top: {
      '::before': 0,
    },
  },
  isGradientEnabled: {
    animationDuration: {
      '::before': '10s',
    },
    animationIterationCount: {
      '::before': 'infinite',
    },
    animationName: {
      '::before': keyframes.gradient,
    },
    animationTimingFunction: {
      '::before': 'ease',
    },
    backgroundImage: {
      '::before': `linear-gradient(
        -45deg,
        ${color.black},
        pink,
        blue,
        white
      )`,
    },
  },
  inner: {
    color: 'white',
    margin: 'auto',
    maxWidth: 900,
    minWidth: 320,
    padding: size[24],
    width: '80%',
  },
  category: {
    color: {
      ':hover': {
        '@media (hover: hover)': 'white',
      },
    },
    opacity: {
      default: 0.6,
      ':hover': {
        '@media (hover: hover)': 1,
      },
    },
  },
  title: {
    marginTop: size[2],
  },
  date: {
    marginBottom: size[24],
    marginTop: size[24],
    opacity: 0.5,
  },
  button: {
    color: 'white',
  },
});
