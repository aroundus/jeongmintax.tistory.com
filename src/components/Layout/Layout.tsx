import * as stylex from '@stylexjs/stylex';

import { useIsDarkScheme } from '@/hooks';
import { darkTheme, lightTheme } from '@/styles';

import { Content } from './Content';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const isDarkScheme = useIsDarkScheme();

  return (
    <div {...stylex.props(isDarkScheme ? darkTheme : lightTheme)}>
      <Header />
      <Content>{children}</Content>
    </div>
  );
}
