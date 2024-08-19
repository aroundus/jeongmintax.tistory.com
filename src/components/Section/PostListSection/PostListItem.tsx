import { useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { MdOutlineComment as MdOutlineCommentIcon } from 'react-icons/md';

import type { Post } from '@/data/post';
import { useIsMobile } from '@/hooks';
import { mixinStyles } from '@/styles';
import { color } from '@/styles/color.stylex';
import { keyframes } from '@/styles/keyframes.stylex';
import { size } from '@/styles/size.stylex';
import { viewport } from '@/styles/viewport.stylex';

interface PostListItemProps {
  isLast?: boolean;
  post: Post;
}

export function PostListItem({ isLast, post }: PostListItemProps) {
  const isMobile = useIsMobile();
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  return (
    <a
      {...stylex.props(styles.container, isLast && styles.isLast)}
      href={post.path}
      onMouseEnter={() => {
        setIsMouseEnter(true);
      }}
      onMouseLeave={() => {
        setIsMouseEnter(false);
      }}
    >
      <div {...stylex.props(styles.category, mixinStyles.font(14, 500))}>{post.category}</div>
      <div
        {...stylex.props(styles.title, mixinStyles.font(isMobile ? 32 : 36, 700), isMouseEnter && styles.isMouseEnter)}
      >
        {post.title}
      </div>
      <p {...stylex.props(styles.summary, mixinStyles.font(16, 400))}>
        {post.summary.length < 150 ? post.summary : `${post.summary.slice(0, 150)}...`}
      </p>
      <div {...stylex.props(styles.meta)}>
        <span {...stylex.props(styles.date)}>{post.date}</span>
        {typeof post.commentCount === 'number' && post.commentCount > 0 && (
          <div {...stylex.props(styles.commentCount, mixinStyles.font(14, 400))}>
            <MdOutlineCommentIcon
              style={{
                height: 20,
                width: 20,
              }}
            />
            {new Intl.NumberFormat().format(post.commentCount)}
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
  meta: {
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
