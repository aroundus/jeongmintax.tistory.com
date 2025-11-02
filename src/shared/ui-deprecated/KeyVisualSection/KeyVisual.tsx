import { useEffect, useState } from 'react';

import * as stylex from '@stylexjs/stylex';
import { GoHeart as GoHeartIcon, GoHeartFill as GoHeartFillIcon } from 'react-icons/go';
import { MdOutlineComment as MdOutlineCommentIcon } from 'react-icons/md';

import { useIsMobile } from '@/shared/lib';
import { mixinStyles } from '@/shared/stylex';
import { colors } from '@/shared/stylex/colors.stylex';
import { keyframes } from '@/shared/stylex/keyframes.stylex';
import { sizes } from '@/shared/stylex/sizes.stylex';
import { viewports } from '@/shared/stylex/viewports.stylex';
import { Button } from '@/shared/ui/button';

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
  thumbnailUrl: string;
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
  thumbnailUrl,
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
        backgroundImage: `url(${thumbnailUrl}), url(https://c.pxhere.com/photos/32/a0/bamboo_plant-108294.jpg!d)`,
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
                  <GoHeartFillIcon
                    style={{
                      height: 20,
                      width: 20,
                    }}
                  />
                ) : (
                  <GoHeartIcon
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
              asChild
              className="mt-5"
              size="lg"
              variant="outline"
            >
              <a href={path}>내용 읽기</a>
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
      '::before': colors.black,
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
        ${colors.black},
        pink,
        blue,
        white
      )`,
    },
  },
  inner: {
    color: 'white',
    margin: 'auto',
    maxWidth: viewports.contentWidth,
    minWidth: 320,
    padding: sizes[24],
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
    marginTop: sizes[8],
  },
  summary: {
    marginTop: sizes[16],
  },
});

const metaStyles = stylex.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    gap: sizes[12],
    marginTop: sizes[16],
  },
  date: {
    color: colors.gray,
  },
  count: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    gap: sizes[2],
  },
  isPointerInactive: {
    cursor: 'default',
  },
});
