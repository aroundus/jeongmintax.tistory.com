import * as stylex from '@stylexjs/stylex';

import * as blogService from '@/entities/blog/api';
import * as menuService from '@/entities/menu/api';

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
        imageURL={blog.imageURL}
        menu={menu}
        name={blog.blogger}
      />
    </section>
  );
}

const styles = stylex.create({
  container: {},
});
