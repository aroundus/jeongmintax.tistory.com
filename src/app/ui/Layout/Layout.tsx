import * as stylex from '@stylexjs/stylex';

import { getBlog } from '@/entities/blog/api';
import { useIsDarkMode } from '@/shared/lib';
import { darkTheme, lightTheme } from '@/shared/stylex';
import { Footer } from '@/widgets/footer/ui';
import { Header } from '@/widgets/header/ui';

import { Content } from './Content';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const isDarkMode = useIsDarkMode();

  const blog = getBlog();

  return (
    <div {...stylex.props(isDarkMode ? darkTheme : lightTheme)}>
      <Header title={blog.title} />
      <Content>{children}</Content>
      <Footer title={blog.title} />
    </div>
  );
}
