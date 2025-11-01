import * as stylex from '@stylexjs/stylex';

import { blogService } from '@/entities/blog/api';
import { menuService } from '@/entities/menu/api';

import { Profile } from './Profile';

interface ProfileSectionProps {
  article: {
    title: string;
  };
}

export function ProfileSection({ article }: ProfileSectionProps) {
  const blog = blogService.getBlog();
  const menu = menuService.getMenu();

  return (
    <section {...stylex.props(styles.container)}>
      <Profile
        article={article}
        imageUrl={blog.imageUrl}
        menu={menu}
        name={blog.blogger}
      />
    </section>
  );
}

const styles = stylex.create({
  container: {},
});
