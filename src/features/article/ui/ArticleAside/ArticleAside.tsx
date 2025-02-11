import { useEffect, useState } from 'react';

import * as stylex from '@stylexjs/stylex';
import { throttle } from 'lodash-es';

import type { Article } from '@/entities/article/api';
import { sizes } from '@/shared/stylex/sizes.stylex';

import { ProfileSection } from './ProfileSection';

interface ArticleAsideProps {
  article: Article;
  target: HTMLElement | null;
}

export function ArticleAside({ article, target }: ArticleAsideProps) {
  const [position, setPosition] = useState<React.CSSProperties['position']>('absolute');
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    if (target === null) {
      return;
    }

    const handleScroll = () => {
      const targetRect = target.getBoundingClientRect();
      const { scrollY } = window;

      setXOffset(targetRect.left - 240 > 0 ? targetRect.left - 240 : 16);

      if (scrollY < target.offsetTop) {
        setPosition('absolute');
        setYOffset(target.offsetTop);
      } else if (scrollY < targetRect.height) {
        setPosition('fixed');
        setYOffset(0);
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
    <aside
      {...stylex.props(styles.container)}
      style={{
        position,
        left: xOffset,
        top: `calc(${yOffset}px + 80px)`,
      }}
    >
      <ProfileSection article={{ title: article.title }} />
    </aside>
  );
}

const styles = stylex.create({
  container: {
    padding: sizes[16],
    position: 'sticky',
    top: 0,
    width: 240,
  },
});
