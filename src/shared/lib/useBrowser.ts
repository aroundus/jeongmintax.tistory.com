import { useEffect, useState } from 'react';

interface Browser {
  isMobile: boolean;
  isDesktop: boolean;
  isAndroid: boolean;
  isInApp: boolean;
  isIOS: boolean;
  isSSR: boolean;
}

const INITIAL_BROWSER = {
  isMobile: false,
  isDesktop: false,
  isAndroid: false,
  isInApp: false,
  isIOS: false,
  isSSR: false,
};

function getBrowser(): Browser {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
  const isAndroid = /;\sAndroid/.test(userAgent);
  const isInApp = /(band|fb|instagram|kakaostory|kakaotalk|line|trill|twitter)/i.test(userAgent);
  const isIOS = /iP(hone|ad|od)/.test(userAgent);
  const isOpera = /Opera Mini/i.test(userAgent);
  const isWindowsMobile = /IEMobile/i.test(userAgent);
  const isSSR = /SSR/i.test(userAgent);

  const isMobile = isAndroid || isIOS || isOpera || isWindowsMobile;
  const isDesktop = !isMobile && !isSSR;

  return {
    isMobile,
    isDesktop,
    isAndroid,
    isInApp,
    isIOS,
    isSSR,
  };
}

export function useBrowser() {
  const [browser, setBrowser] = useState<Browser>(INITIAL_BROWSER);

  useEffect(() => {
    const handleWindowResize = () => {
      setBrowser(getBrowser());
    };

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return browser;
}
