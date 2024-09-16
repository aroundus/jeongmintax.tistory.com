import { useCallback, useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const [isTargetReached, setIsTargetReached] = useState<boolean>(false);

  const updateTarget = useCallback((event: MediaQueryListEvent) => setIsTargetReached(event.matches), []);

  useEffect(() => {
    if (!query) {
      return undefined;
    }

    const media = window.matchMedia(query);

    if (media.addEventListener) {
      media.addEventListener('change', updateTarget);
    } else {
      media.addListener(updateTarget);
    }

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setIsTargetReached(true);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', updateTarget);
      } else {
        media.removeListener(updateTarget);
      }
    };
  }, [query, updateTarget]);

  return isTargetReached;
}

export function useIsDarkMode() {
  return useMediaQuery('(prefers-color-scheme: dark)');
}

export function useIsMobile(width: number = 560) {
  return useMediaQuery(`(max-width: ${width - 1}px)`);
}
