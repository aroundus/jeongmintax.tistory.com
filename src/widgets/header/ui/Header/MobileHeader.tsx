import { useEffect, useState } from 'react';

import { RiMenuFoldLine as RiMenuFoldLineIcon } from 'react-icons/ri';

import Logo from '@/shared/assets/logo.svg?react';

import { NavigationDrawer } from './NavigationDrawer';

export function MobileHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <header className="z-2 bg-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <a
            className="flex items-center gap-2"
            href="/"
          >
            <Logo
              className="fill-stone-500"
              height={40}
            />
          </a>
          {isMounted && (
            <RiMenuFoldLineIcon
              className="h-7 w-7"
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
