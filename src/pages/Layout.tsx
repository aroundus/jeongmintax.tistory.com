import * as stylex from '@stylexjs/stylex';
import { Outlet } from 'react-router-dom';

import { getBlog } from '@/entities/blog/api';
import { useIsDarkMode } from '@/shared/lib';
import { darkTheme, lightTheme } from '@/shared/stylex';
import { Footer } from '@/widgets/footer/ui';
import { Header } from '@/widgets/header/ui';

export default function Layout() {
  const isDarkMode = useIsDarkMode();

  const blog = getBlog();

  return (
    <div {...stylex.props(isDarkMode ? darkTheme : lightTheme)}>
      <Header title={blog.title} />
      <main {...stylex.props(styles.container)}>
        <Outlet />
      </main>
      <Footer title={blog.title} />
    </div>
  );
}

const styles = stylex.create({
  container: {
    margin: 'auto',
  },
});
