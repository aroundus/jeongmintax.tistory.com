import { useEffect, useState } from 'react';

import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import * as stylex from '@stylexjs/stylex';
import { RiMenuFoldLine as RiMenuFoldLineIcon } from 'react-icons/ri';

import { getSession } from '@/entities/user/api';
import { SearchTextField } from '@/features/search/ui';
import SymbolMarkIcon from '@/shared/assets/icons/symbol-mark.svg?react';
import { useIsMobile } from '@/shared/lib';
import { mixinStyles } from '@/shared/stylex';
import { colors } from '@/shared/stylex/colors.stylex';
import { sizes } from '@/shared/stylex/sizes.stylex';
import { viewports } from '@/shared/stylex/viewports.stylex';

import { NavigationDrawer } from './NavigationDrawer';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const session = getSession();

  return (
    <>
      <header {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.inner)}>
          <a
            {...stylex.props(styles.title, mixinStyles.font(18, 900))}
            href="/"
          >
            <SymbolMarkIcon
              fill={colors.primary}
              height={16}
            />
            {title}
          </a>
          {isMounted && (
            <>
              {isMobile ? (
                <RiMenuFoldLineIcon
                  style={{ height: 28, width: 28 }}
                  onClick={() => {
                    setIsDrawerOpen(true);
                  }}
                />
              ) : (
                <div {...stylex.props(styles.content)}>
                  {session.isLoggedIn && (
                    <div {...stylex.props(mixinStyles.ellipsis(1), mixinStyles.font(16, 400))}>
                      <strong>{session.user.name}</strong> 님, 안녕하세요 👋
                    </div>
                  )}
                  <SearchTextField />
                </div>
              )}
            </>
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
    padding: `${sizes[20]} ${sizes[24]}`,
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
