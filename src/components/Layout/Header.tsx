import { useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import { RiMenuFoldLine as RiMenuFoldLineIcon } from 'react-icons/ri';

import SymbolmarkIcon from '@/assets/images/icons/symbolmark.svg?react';
import { SearchTextField } from '@/components/SearchTextField';
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

  return (
    <>
      <header {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.inner)}>
          <a
            {...stylex.props(styles.title, mixinStyles.font(isMobile ? 16 : 18, 900))}
            href="/"
          >
            <SymbolmarkIcon
              fill={color.primary}
              height={16}
            />
            {title}
          </a>
          {isMobile ? (
            <RiMenuFoldLineIcon
              style={{ height: 24, width: 24 }}
              onClick={() => {
                setIsDrawerOpen(true);
              }}
            />
          ) : (
            <SearchTextField />
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
    zIndex: 1,
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
    whiteSpace: 'nowrap',
  },
});
