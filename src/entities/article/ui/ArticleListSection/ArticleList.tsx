import type { ArticleService } from '@/entities/article/api';

import { ArticleListItem } from './ArticleListItem';

interface ListProps {
  articles: ArticleService.Article[];
}

export function ArticleList({ articles }: ListProps) {
  return (
    <div className="flex flex-col gap-6">
      {articles.map((article, index) => (
        <ArticleListItem
          {...article}
          isLast={articles.length === index + 1}
          key={article.path}
        />
      ))}
    </div>
  );
}
