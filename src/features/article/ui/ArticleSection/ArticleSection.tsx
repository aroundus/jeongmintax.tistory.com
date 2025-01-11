import * as stylex from '@stylexjs/stylex';

import { size } from '@/shared/stylex/size.stylex';
import { viewport } from '@/shared/stylex/viewport.stylex';

import '@/features/article/ui/article.scss';

interface ArticleSectionProps {
  html: string;
}

export function ArticleSection({ html }: ArticleSectionProps) {
  return (
    <section
      id="article"
      {...stylex.props(styles.container)}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}

const styles = stylex.create({
  container: {
    margin: 'auto',
    maxWidth: viewport.contentWidth,
    padding: `${size[40]} ${size[24]}`,
  },
});
