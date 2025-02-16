import { useEffect, useState } from 'react';

import { colors } from '@stylexjs/open-props/lib/colors.stylex';
import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import * as stylex from '@stylexjs/stylex';
import { RiMenuFoldLine as RiMenuFoldLineIcon } from 'react-icons/ri';

import Logo from '@/shared/assets/logo.svg?react';
import { useIsDarkMode } from '@/shared/lib';
import { mixinStyles } from '@/shared/stylex';
import { sizes } from '@/shared/stylex/sizes.stylex';
import { viewports } from '@/shared/stylex/viewports.stylex';

import { NavigationDrawer } from './NavigationDrawer';

export function MobileHeader() {
  const isDarkMode = useIsDarkMode();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
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
            <RiMenuFoldLineIcon
              style={{ height: 28, width: 28 }}
              onClick={() => {
                setIsDrawerOpen(true);
              }}
            />
          )}
        </div>
      </header>
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
      />
    </>
  );
}

const styles = stylex.create({
  container: {
    backgroundColor: 'Canvas',
    boxShadow: shadows.shadow2,
    zIndex: 2,
  },
  inner: {
    alignItems: 'center',
    display: 'flex',
    gap: sizes[16],
    justifyContent: 'space-between',
    margin: 'auto',
    maxWidth: viewports.layoutWidth,
    padding: `${sizes[16]} ${sizes[24]}`,
  },
  title: {
    alignItems: 'center',
    color: 'CanvasText',
    display: 'flex',
    gap: sizes[8],
    letterSpacing: '0.04em',
    whiteSpace: 'nowrap',
  },
});
