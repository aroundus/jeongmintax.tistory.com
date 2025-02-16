import * as stylex from '@stylexjs/stylex';
import { Outlet } from 'react-router-dom';

import { useIsMobile } from '@/shared/lib';
import { Footer } from '@/widgets/footer/ui';
import { DesktopHeader, MobileHeader } from '@/widgets/header/ui';

export default function Layout() {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <main {...stylex.props(styles.main)}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

const styles = stylex.create({
  main: {
    margin: 'auto',
  },
});
