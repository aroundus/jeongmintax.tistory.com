import * as stylex from '@stylexjs/stylex';
import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';

import { mixinStyles } from '@/styles';
import { color } from '@/styles/color.stylex';
import { size } from '@/styles/size.stylex';
import { viewport } from '@/styles/viewport.stylex';

export function Footer() {
  return (
    <footer {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.inner)}>
        <div {...stylex.props(styles.title, mixinStyles.font(16, 900))}>세무회계 정민</div>
        <address {...stylex.props(addressStyles.container)}>
          <ul {...stylex.props(addressStyles.ul, mixinStyles.font(14, 400))}>
            <li {...stylex.props(addressStyles.li)}>
              <strong>대표세무사</strong> 임현수
            </li>
            <li {...stylex.props(addressStyles.li)}>
              <strong>이메일 상담</strong> <a href="mailto:imtax8250@naver.com">imtax8250@naver.com</a>
            </li>
            <li {...stylex.props(addressStyles.li)}>
              <strong>유선 상담</strong> 010-7643-3007
            </li>
            <li {...stylex.props(addressStyles.li)}>
              <strong>사업자등록번호</strong> 879-36-01461
            </li>
            <li>
              <strong>주소</strong> 서울시 서초구 사평대로55길 82-3 301호
            </li>
          </ul>
        </address>
      </div>
    </footer>
  );
}

const styles = stylex.create({
  container: {
    backgroundColor: 'Canvas',
    boxShadow: shadows.innerShadow0,
  },
  inner: {
    alignItems: 'center',
    display: 'flex',
    gap: size[24],
    justifyContent: 'space-between',
    margin: 'auto',
    maxWidth: viewport.contentWidth,
    padding: `${size[40]} ${size[24]}`,
  },
  title: {
    minWidth: 100,
  },
});

const addressStyles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: size[16],
  },
  ul: {
    color: color.gray,
    display: 'flex',
    flexWrap: 'wrap',
  },
  li: {
    content: {
      '::after': '|',
    },
    marginLeft: {
      '::after': size[8],
    },
    marginRight: {
      '::after': size[8],
    },
  },
});
