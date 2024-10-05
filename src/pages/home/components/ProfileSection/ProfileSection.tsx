import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import * as stylex from '@stylexjs/stylex';

import { getBlog } from '@/data/blog';
import { getMenu } from '@/data/menu';

import { Profile } from './Profile';

export function ProfileSection() {
  const blog = getBlog();
  const menu = getMenu();

  return (
    <section {...stylex.props(styles.container)}>
      <Profile
        description={blog.description}
        imageURL={blog.imageURL}
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
