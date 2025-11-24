import { useEffect, useState } from 'react';

import { SearchTextField } from '@/entities/search/ui';
import { userService } from '@/entities/user/api';
import Logo from '@/shared/assets/logo.svg?react';
import { useIsDarkMode } from '@/shared/lib';

export function DesktopHeader() {
  const isDarkMode = useIsDarkMode();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const session = userService.getSession();

  return (
    <header className="sticky top-0 z-2 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-10 py-4">
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
          <div className="flex items-center gap-2 overflow-hidden">
            {session.isLoggedIn && (
              <div className="text-base">
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
