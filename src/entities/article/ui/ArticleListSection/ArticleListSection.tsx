import type { ArticleService } from '../../api';

import { ArticleList } from './ArticleList';

interface ArticleListSectionProps {
  articles: ArticleService.Article[];
}

export function ArticleListSection({ articles }: ArticleListSectionProps) {
  return (
    <section
      className="mx-auto w-xl max-w-full"
      id="article-list"
    >
      <ArticleList articles={articles} />
    </section>
  );
}
