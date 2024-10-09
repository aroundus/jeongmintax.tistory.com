import { useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import { RiMenuFoldLine as RiMenuFoldLineIcon } from 'react-icons/ri';

import SymbolMarkIcon from '@/assets/icons/symbol-mark.svg?react';
import { SearchTextField } from '@/components/SearchTextField';
import { getSession } from '@/data/session';
import { useIsMobile } from '@/hooks';
import { mixinStyles } from '@/styles';
import { color } from '@/styles/color.stylex';
import { size } from '@/styles/size.stylex';
import { viewport } from '@/styles/viewport.stylex';

import { NavigationDrawer } from './NavigationDrawer';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
              fill={color.primary}
              height={16}
            />
            {title}
          </a>
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
                <div>
                  <strong>{session.user.name}</strong> 님 👋
                </div>
              )}
              <SearchTextField />
            </div>
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
    justifyContent: 'space-between',
    margin: 'auto',
    maxWidth: viewport.layoutWidth,
    padding: `${size[20]} ${size[24]}`,
  },
  title: {
    alignItems: 'center',
    color: 'CanvasText',
    display: 'flex',
    gap: size[8],
    letterSpacing: '0.04em',
    whiteSpace: 'nowrap',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    gap: size[16],
  },
});
