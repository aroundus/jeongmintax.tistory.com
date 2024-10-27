import * as stylex from '@stylexjs/stylex';

import { size } from '@/styles/size.stylex';
import { viewport } from '@/styles/viewport.stylex';

import '@/assets/styles/article.scss';

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
