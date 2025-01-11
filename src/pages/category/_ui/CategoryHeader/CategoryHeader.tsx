import * as stylex from '@stylexjs/stylex';

import { mixinStyles } from '@/shared/stylex';
import { colors } from '@/shared/stylex/colors.stylex';
import { sizes } from '@/shared/stylex/sizes.stylex';
import { viewports } from '@/shared/stylex/viewports.stylex';

interface CategoryHeaderProps {
  articleCount: number; // 검색 결과 글 목록 수
  keyword: string; // 검색어
}

export function CategoryHeader({ keyword, articleCount }: CategoryHeaderProps) {
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.keyword, mixinStyles.font(36, 700))}>{keyword}</div>
      <p {...stylex.props(styles.description, mixinStyles.font(18, 500))}>
        총 <strong>{articleCount}개</strong>의 글이 있습니다.
      </p>
    </div>
  );
}

const styles = stylex.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: sizes[12],
    margin: 'auto',
    maxWidth: '100%',
    padding: `${sizes[60]} ${sizes[24]} ${sizes[24]}`,
    width: viewports.contentInnerWidth,
  },
  keyword: {
    color: colors.primary,
  },
  description: {
    marginBottom: sizes[20],
  },
});
