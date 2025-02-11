import * as stylex from '@stylexjs/stylex';

import { sizes } from '@/shared/stylex/sizes.stylex';
import { viewports } from '@/shared/stylex/viewports.stylex';
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
    maxWidth: viewports.contentWidth,
    padding: `${sizes[40]} ${sizes[24]}`,
  },
});
