import { Fragment } from 'react';
import * as stylex from '@stylexjs/stylex';

import type { Category } from '@/data/category';
import { useIsMobile } from '@/hooks';
import { mixinStyles } from '@/styles';
import { color } from '@/styles/color.stylex';
import { size } from '@/styles/size.stylex';
import { viewport } from '@/styles/viewport.stylex';

interface CategoryFieldProps {
  categories: Category[];
}

export function CategoryField({ categories }: CategoryFieldProps) {
  const isMobile = useIsMobile();

  return (
    <div {...stylex.props(styles.container)}>
      {categories.map((category) => (
        <Fragment key={category.name}>
          <a
            {...stylex.props(categoryStyles.container)}
            href={`/category${category.name === '전체' ? '' : `/${category.name}`}`}
          >
            <span {...stylex.props(mixinStyles.font(isMobile ? 14 : 16, 500))}>
              {category.name === '전체' ? category.name : `#${category.name}`}
            </span>
            <span {...stylex.props(categoryStyles.postCount, mixinStyles.font(isMobile ? 14 : 16, 400))}>
              {new Intl.NumberFormat().format(category.postCount)}
            </span>
          </a>
        </Fragment>
      ))}
    </div>
  );
}

const styles = stylex.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    gap: `${size[8]} ${size[12]}`,
    justifyContent: 'center',
    margin: 'auto',
    maxWidth: '100%',
    padding: size[24],
    width: viewport.contentInnerWidth,
  },
});

const categoryStyles = stylex.create({
  container: {
    cursor: 'pointer',
    display: 'flex',
    gap: size[4],
  },
  postCount: {
    color: color.gray,
  },
});
