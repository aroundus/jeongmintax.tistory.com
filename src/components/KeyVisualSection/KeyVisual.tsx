import * as stylex from '@stylexjs/stylex';
import { MdOutlineComment as MdOutlineCommentIcon } from 'react-icons/md';

import { Button } from '@/components/Button';
import { useIsMobile } from '@/hooks';
import { mixinStyles } from '@/styles';
import { color } from '@/styles/color.stylex';
import { keyframes } from '@/styles/keyframes.stylex';
import { size } from '@/styles/size.stylex';
import { viewport } from '@/styles/viewport.stylex';

interface KeyVisualProps {
  category: string;
  categoryPath: string;
  commentCount?: number;
  date: string;
  isButtonVisible?: boolean;
  isGradientEnabled?: boolean;
  path: string;
  summary: string;
  thumbnailURL: string;
  title: string;
}

export function KeyVisual({
  category,
  categoryPath,
  commentCount,
  date,
  isButtonVisible,
  isGradientEnabled,
  path,
  summary,
  thumbnailURL,
  title,
}: KeyVisualProps) {
  const isMobile = useIsMobile();

  return (
    <div
      {...stylex.props(styles.container, isGradientEnabled && styles.isGradientEnabled)}
      key={path}
      style={{
        backgroundImage: `url(${thumbnailURL}), url(https://c.pxhere.com/photos/32/a0/bamboo_plant-108294.jpg!d)`,
      }}
    >
      <div {...stylex.props(styles.inner, mixinStyles.absoluteCenter())}>
        <a
          {...stylex.props(styles.category, mixinStyles.font(16, 500))}
          href={categoryPath}
        >
          {category}
        </a>
        <h1 {...stylex.props(styles.title, mixinStyles.font(isMobile ? 36 : 48, 700))}>{title}</h1>
        <p {...stylex.props(styles.summary)}>{summary}</p>
        <div></div>
        <div {...stylex.props(metaStyles.container)}>
          <span {...stylex.props(metaStyles.date)}>{date}</span>
          {typeof commentCount === 'number' && commentCount > 0 && (
            <div {...stylex.props(metaStyles.commentCount, mixinStyles.font(14, 400))}>
              <MdOutlineCommentIcon
                style={{
                  height: 20,
                  width: 20,
                }}
              />
              {new Intl.NumberFormat().format(commentCount)}
            </div>
          )}
        </div>
        {isButtonVisible && (
          <Button
            color="primary"
            variant="outlined"
            size="lg"
            stylexStyles={styles.button}
            onClick={() => {
              location.href = path;
            }}
          >
            내용 읽기
          </Button>
        )}
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
    height: 640,
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
    maxWidth: viewport.contentWidth,
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
    marginTop: size[8],
  },
  summary: {
    marginTop: size[16],
  },
  button: {
    color: 'white',
    marginTop: size[24],
  },
});

const metaStyles = stylex.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    gap: size[12],
    marginTop: size[16],
  },
  date: {
    color: color.gray,
  },
  commentCount: {
    alignItems: 'center',
    display: 'flex',
    gap: size[2],
  },
});