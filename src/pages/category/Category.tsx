import * as stylex from '@stylexjs/stylex';

import { CategoryField } from '@/components/CategoryField';
import { PostListSection } from '@/components/Section';
import { getArticles } from '@/data/article';
import { getCategories } from '@/data/category';

import { CategoryHeader } from './components/CategoryHeader';

export function Category() {
  const articles = getArticles();
  const categories = getCategories();
  const keyword = location.pathname.split('/')[2];

  return (
    <div {...stylex.props(styles.container)}>
      <CategoryHeader
        keyword={keyword ? `#${decodeURIComponent(keyword)}` : '전체'}
        postCount={articles.length}
      />
      <CategoryField categories={categories} />
      <PostListSection contents={articles} />
    </div>
  );
}

const styles = stylex.create({
  container: {},
});
