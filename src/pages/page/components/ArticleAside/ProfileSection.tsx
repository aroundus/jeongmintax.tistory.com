import * as stylex from '@stylexjs/stylex';

import { getBlog } from '@/data/blog';
import { getMenu } from '@/data/menu';

import { Profile } from './Profile';

interface ProfileSectionProps {
  article: {
    title: string;
  };
}

export function ProfileSection({ article }: ProfileSectionProps) {
  const blog = getBlog();
  const menu = getMenu();

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
