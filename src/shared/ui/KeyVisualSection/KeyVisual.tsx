import { useEffect, useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { FaHeart as FaHeartIcon, FaRegHeart as FaRegHeartIcon } from 'react-icons/fa';
import { MdOutlineComment as MdOutlineCommentIcon } from 'react-icons/md';

import { useIsMobile } from '@/shared/lib';
import { mixinStyles } from '@/shared/stylex';
import { color } from '@/shared/stylex/color.stylex';
import { keyframes } from '@/shared/stylex/keyframes.stylex';
import { size } from '@/shared/stylex/size.stylex';
import { viewport } from '@/shared/stylex/viewport.stylex';
import { Button } from '@/shared/ui';

interface KeyVisualProps {
  category: string;
  categoryPath: string;
  commentCount?: number;
  date: string;
  isButtonVisible?: boolean;
  isGradientEnabled?: boolean;
  isLikeActive: boolean;
  likeCount: number | null;
  path: string;
  summary: string;
  thumbnailURL: string;
  title: string;
  onCommentClick?: () => void;
  onLikeClick: () => void;
}

export function KeyVisual({
  category,
  categoryPath,
  commentCount,
  date,
  isButtonVisible,
  isGradientEnabled,
  isLikeActive,
  likeCount,
  path,
  summary,
  thumbnailURL,
  title,
  onCommentClick: handleCommentClick,
  onLikeClick: handleLikeClick,
}: KeyVisualProps) {
  const isMobile = useIsMobile();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      {...stylex.props(styles.container, isGradientEnabled && styles.isGradientEnabled)}
      key={path}
      style={{
        backgroundImage: `url(${thumbnailURL}), url(https://c.pxhere.com/photos/32/a0/bamboo_plant-108294.jpg!d)`,
      }}
    >
      {isMounted && (
        <div {...stylex.props(styles.inner, mixinStyles.absoluteCenter())}>
          <a
            {...stylex.props(styles.category, mixinStyles.font(16, 500))}
            href={categoryPath}
          >
            {category}
          </a>
          <h1 {...stylex.props(styles.title, mixinStyles.font(isMobile ? 36 : 48, 700))}>{title}</h1>
          <p {...stylex.props(styles.summary, mixinStyles.font(18, 400))}>{summary}</p>
          <div></div>
          <div {...stylex.props(metaStyles.container)}>
            <span {...stylex.props(metaStyles.date)}>{date}</span>
            {typeof commentCount === 'number' && commentCount > 0 && (
              <div
                {...stylex.props(
                  metaStyles.count,
                  handleCommentClick === undefined && metaStyles.isPointerInactive,
                  mixinStyles.font(14, 400),
                )}
                onClick={handleCommentClick}
              >
                <MdOutlineCommentIcon
                  style={{
                    height: 20,
                    width: 20,
                  }}
                />
                {new Intl.NumberFormat().format(commentCount)}
              </div>
            )}
            {typeof likeCount === 'number' && (
              <div
                {...stylex.props(metaStyles.count, mixinStyles.font(14, 400))}
                onClick={handleLikeClick}
              >
                {isLikeActive ? (
                  <FaHeartIcon
                    style={{
                      height: 20,
                      width: 20,
                    }}
                  />
                ) : (
                  <FaRegHeartIcon
                    style={{
                      height: 20,
                      width: 20,
                    }}
                  />
                )}
                {new Intl.NumberFormat().format(likeCount)}
              </div>
            )}
          </div>
          {isButtonVisible && (
            <Button
              color="secondary"
              href={path}
              variant="contained"
              size="lg"
              stylexStyles={styles.button}
            >
              내용 읽기
            </Button>
          )}
        </div>
      )}
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
  count: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    gap: size[2],
  },
  isPointerInactive: {
    cursor: 'default',
  },
});
