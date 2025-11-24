import { memo } from 'react';

import '../article.scss';

interface ArticleSectionProps {
  html: string;
}

export const ArticleSection = memo(({ html }: ArticleSectionProps) => {
  return (
    <section
      className="mx-auto max-w-3xl px-6 py-10"
      id="article"
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
});
