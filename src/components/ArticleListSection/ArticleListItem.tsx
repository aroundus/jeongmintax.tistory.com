import { useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { FaHeart as FaHeartIcon, FaRegHeart as FaRegHeartIcon } from 'react-icons/fa';
import { MdOutlineComment as MdOutlineCommentIcon } from 'react-icons/md';

import { useIsMobile } from '@/hooks';
import { mixinStyles } from '@/styles';
import { color } from '@/styles/color.stylex';
import { keyframes } from '@/styles/keyframes.stylex';
import { size } from '@/styles/size.stylex';
import { viewport } from '@/styles/viewport.stylex';

import type { ArticleListItemContent } from './types';

interface ArticleListItemProps extends ArticleListItemContent {
  isLast?: boolean;
}

export function ArticleListItem({
  category,
  commentCount,
  date,
  isLast,
  isLikeActive,
  likeCount,
  path,
  summary,
  title,
}: ArticleListItemProps) {
  const isMobile = useIsMobile();
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  return (
    <a
      {...stylex.props(styles.container, isLast && styles.isLast)}
      href={path}
      onMouseEnter={() => {
        setIsMouseEnter(true);
      }}
      onMouseLeave={() => {
        setIsMouseEnter(false);
      }}
    >
      <div {...stylex.props(styles.category, mixinStyles.font(14, 500))}>{category}</div>
      <div
        {...stylex.props(styles.title, mixinStyles.font(isMobile ? 32 : 36, 700), isMouseEnter && styles.isMouseEnter)}
      >
        {title}
      </div>
      <p {...stylex.props(styles.summary, mixinStyles.font(18, 400))}>{summary}</p>
      <div {...stylex.props(metaStyles.container)}>
        <span {...stylex.props(metaStyles.date)}>{date}</span>
        {typeof commentCount === 'number' && commentCount > 0 && (
          <div {...stylex.props(metaStyles.count, mixinStyles.font(14, 400))}>
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
          <div {...stylex.props(metaStyles.count, mixinStyles.font(14, 400))}>
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
    </a>
  );
}

const styles = stylex.create({
  container: {
    borderBottomColor: color.gray,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    color: {
      ':hover': {
        '@media (hover: hover)': 'initial',
      },
    },
    cursor: 'pointer',
    display: 'block',
    margin: 'auto',
    maxWidth: '100%',
    padding: `${size[48]} ${size[24]}`,
    width: viewport.contentInnerWidth,
  },
  isLast: {
    borderBottomColor: 'rgba(0, 0, 0, 0)',
  },
  isMouseEnter: {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
    animationDuration: '1s',
    animationFillMode: 'forwards',
    animationIterationCount: 1,
    animationName: keyframes.gradient2,
    animationTimingFunction: 'ease-in-out',
    backgroundClip: 'text',
    backgroundImage: `linear-gradient(
      to left,
      CanvasText 10%,
      ${color.gray} 20%,
      ${color.primary} 70%
    )`,
    backgroundSize: '500% auto',
    textFillColor: 'rgba(0, 0, 0, 0)',
  },
  category: {
    color: color.gray,
  },
  title: {
    marginTop: size[8],
    transition: '200ms ease-out',
  },
  summary: {
    marginTop: size[16],
    transition: '200ms ease-out',
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
    display: 'flex',
    gap: size[2],
  },
});
