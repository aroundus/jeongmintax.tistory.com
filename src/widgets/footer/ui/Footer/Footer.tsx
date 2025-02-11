import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import * as stylex from '@stylexjs/stylex';

import SymbolMarkIcon from '@/shared/assets/icons/symbol-mark.svg?react';
import { mixinStyles } from '@/shared/stylex';
import { colors } from '@/shared/stylex/colors.stylex';
import { sizes } from '@/shared/stylex/sizes.stylex';
import { viewports } from '@/shared/stylex/viewports.stylex';

interface FooterProps {
  title: string;
}

export function Footer({ title }: FooterProps) {
  return (
    <footer {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.inner)}>
        <div {...stylex.props(styles.title, mixinStyles.font(18, 900))}>
          <SymbolMarkIcon
            fill={colors.secondary}
            height={16}
          />
          {title}
        </div>
        <address {...stylex.props(addressStyles.container)}>
          <ul {...stylex.props(addressStyles.ul, mixinStyles.font(16, 400))}>
            <li {...stylex.props(addressStyles.li)}>
              <strong>대표세무사</strong> 임현수
            </li>
            <li {...stylex.props(addressStyles.li)}>
              <strong>사업자등록번호</strong> 879-36-01461
            </li>
            <li {...stylex.props(addressStyles.li)}>
              <strong>이메일 상담</strong> <a href="mailto:imtax8250@naver.com">imtax8250@naver.com</a>
            </li>
            <li {...stylex.props(addressStyles.li)}>
              <strong>전화 상담</strong> 010-7643-3007
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
    position: 'relative',
    zIndex: 2,
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    gap: sizes[8],
    justifyContent: 'space-between',
    margin: 'auto',
    maxWidth: viewports.layoutWidth,
    padding: `${sizes[40]} ${sizes[24]}`,
  },
  title: {
    alignItems: 'center',
    color: 'CanvasText',
    display: 'flex',
    gap: sizes[8],
    letterSpacing: '0.04em',
    minWidth: 120,
  },
});

const addressStyles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: sizes[16],
  },
  ul: {
    color: colors.gray,
    display: 'flex',
    flexWrap: 'wrap',
  },
  li: {
    content: {
      '::after': '|',
    },
    marginLeft: {
      '::after': sizes[8],
    },
    marginRight: {
      '::after': sizes[8],
    },
  },
});
