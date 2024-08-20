import * as stylex from '@stylexjs/stylex';
import { BiSearch as BiSearchIcon } from 'react-icons/bi';

import { mixinStyles } from '@/styles';
import { color } from '@/styles/color.stylex';
import { size } from '@/styles/size.stylex';

interface SearchResultHeaderProps {
  keyword: string; // 검색어
  postCount: number; // 검색 결과 글 목록 수
}

export function SearchResultHeader({ keyword, postCount }: SearchResultHeaderProps) {
  return (
    <div {...stylex.props(styles.container)}>
      <BiSearchIcon {...stylex.props(styles.icon)} />
      <div {...stylex.props(styles.keyword, mixinStyles.font(36, 700))}>{keyword}</div>
      <p {...stylex.props(styles.description, mixinStyles.font(18, 500))}>
        총 <strong>{postCount}개</strong>의 글이 있습니다.
      </p>
    </div>
  );
}

const styles = stylex.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: size[12],
    margin: 'auto',
    padding: `${size[60]} ${size[24]} ${size[24]}`,
  },
  keyword: {
    color: color.primary,
  },
  description: {},
  icon: {
    height: size[56],
    width: size[56],
  },
});
