import { useEffect, useState } from 'react';

import { colors } from '@stylexjs/open-props/lib/colors.stylex';
import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import * as stylex from '@stylexjs/stylex';

import { SearchTextField } from '@/entities/search/ui';
import { getSession } from '@/entities/user/api';
import Logo from '@/shared/assets/logo.svg?react';
import { useIsDarkMode } from '@/shared/lib';
import { mixinStyles } from '@/shared/stylex';
import { sizes } from '@/shared/stylex/sizes.stylex';
import { viewports } from '@/shared/stylex/viewports.stylex';

export function HeaderDesktop() {
  const isDarkMode = useIsDarkMode();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const session = getSession();

  return (
    <header {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.inner)}>
        <a
          {...stylex.props(styles.title, mixinStyles.font(18, 900))}
          href="/"
        >
          <Logo
            fill={isDarkMode ? colors.stone2 : colors.stone8}
            height={40}
          />
        </a>
        {isMounted && (
          <div {...stylex.props(styles.content)}>
            {session.isLoggedIn && (
              <div {...stylex.props(mixinStyles.ellipsis(1), mixinStyles.font(16, 400))}>
                <strong>{session.user.name}</strong> 님,
              </div>
            )}
            <SearchTextField />
          </div>
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
    zIndex: 2,
  },
  inner: {
    alignItems: 'center',
    display: 'flex',
    gap: sizes[16],
    justifyContent: 'space-between',
    margin: 'auto',
    maxWidth: viewports.layoutWidth,
    padding: `${sizes[16]} ${sizes[40]}`,
  },
  title: {
    alignItems: 'center',
    color: 'CanvasText',
    display: 'flex',
    gap: sizes[8],
    letterSpacing: '0.04em',
    whiteSpace: 'nowrap',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    gap: sizes[8],
    overflow: 'hidden',
  },
});
