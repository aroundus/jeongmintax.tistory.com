import { Fragment } from 'react';
import * as stylex from '@stylexjs/stylex';

import type { Category } from '@/entities/category/api';
import { mixinStyles } from '@/shared/stylex';
import { color } from '@/shared/stylex/color.stylex';
import { size } from '@/shared/stylex/size.stylex';
import { viewport } from '@/shared/stylex/viewport.stylex';

interface CategoryFieldProps {
  categories: Category[];
}

export function CategoryField({ categories }: CategoryFieldProps) {
  return (
    <div {...stylex.props(styles.container)}>
      {categories.map((category) => (
        <Fragment key={category.name}>
          <a
            {...stylex.props(categoryStyles.container)}
            href={`/category${category.name === '전체' ? '' : `/${category.name}`}`}
          >
            <span {...stylex.props(mixinStyles.font(16, 500))}>
              {category.name === '전체' ? category.name : `#${category.name}`}
            </span>
            <span {...stylex.props(categoryStyles.articleCount, mixinStyles.font(16, 400))}>
              {new Intl.NumberFormat().format(category.articleCount)}
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
    padding: `${size[24]} ${size[36]}`,
    width: viewport.contentInnerWidth,
  },
});

const categoryStyles = stylex.create({
  container: {
    cursor: 'pointer',
    display: 'flex',
    gap: size[4],
  },
  articleCount: {
    color: color.gray,
  },
});
