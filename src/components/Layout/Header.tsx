import * as stylex from '@stylexjs/stylex';
import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';

import SymbolmarkIcon from '@/assets/images/icons/symbolmark.svg?react';
import { getBlog } from '@/data/blog';
import { getMenu } from '@/data/menu';
import { useIsMobile } from '@/hooks';
import { mixinStyles } from '@/styles';
import { color } from '@/styles/color.stylex';
import { size } from '@/styles/size.stylex';
import { viewport } from '@/styles/viewport.stylex';

export function Header() {
  const isMobile = useIsMobile();

  const blog = getBlog();
  const menu = getMenu();

  return (
    <header {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.inner)}>
        <a
          {...stylex.props(styles.title, mixinStyles.font(16, 900))}
          href="/"
        >
          <SymbolmarkIcon
            fill={color.primary}
            height={16}
          />
          {blog.title}
        </a>
        {isMobile ? (
          <div>모바일</div>
        ) : (
          <nav {...stylex.props(navigationStyles.container)}>
            <ul {...stylex.props(navigationStyles.menu, mixinStyles.font(16, 500))}>
              {menu.map((menuItem) => (
                <li key={menuItem.path}>
                  <a href={menuItem.path}>{menuItem.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

const styles = stylex.create({
  container: {
    backgroundColor: 'Canvas',
    boxShadow: shadows.shadow2,
    position: 'sticky',
    top: 0,
    zIndex: 16,
  },
  inner: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    maxWidth: viewport.contentWidth,
    padding: size[24],
  },
  title: {
    alignItems: 'center',
    display: 'flex',
    gap: size[8],
  },
});

const navigationStyles = stylex.create({
  container: {},
  menu: {
    display: 'flex',
    gap: size[36],
    justifyContent: 'center',
  },
});
