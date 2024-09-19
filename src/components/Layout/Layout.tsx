import { useMemo } from 'react';
import * as stylex from '@stylexjs/stylex';

import { getBlog } from '@/data/blog';
import { getSymbolMarkURL } from '@/data/symbolMark';
import { useIsDarkMode } from '@/hooks';
import { darkTheme, lightTheme } from '@/styles';

import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const isDarkMode = useIsDarkMode();

  const blog = getBlog();
  const symbolMarkURL = useMemo(() => getSymbolMarkURL(isDarkMode), [isDarkMode]);

  return (
    <div {...stylex.props(isDarkMode ? darkTheme : lightTheme)}>
      <Header
        symbolMarkURL={symbolMarkURL}
        title={blog.title}
      />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}
