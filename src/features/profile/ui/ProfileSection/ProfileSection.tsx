import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import * as stylex from '@stylexjs/stylex';

import { blogService } from '@/entities/blog/api';
import { menuService } from '@/entities/menu/api';

import { Profile } from './Profile';

export function ProfileSection() {
  const blog = blogService.getBlog();
  const menu = menuService.getMenu();

  return (
    <section {...stylex.props(styles.container)}>
      <Profile
        description={blog.description}
        imageUrl={blog.imageUrl}
        menu={menu}
        name={blog.blogger}
      />
    </section>
  );
}

const styles = stylex.create({
  container: {
    boxShadow: shadows.shadow2,
  },
});
