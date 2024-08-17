import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import * as stylex from '@stylexjs/stylex';

import { getBlog } from '@/data/blog';

import { Profile } from './Profile';

export function ProfileSection() {
  const blog = getBlog();

  return (
    <div {...stylex.props(styles.container)}>
      <Profile
        description={blog.description}
        imageURL={blog.imageURL}
        name={blog.blogger}
      />
    </div>
  );
}

const styles = stylex.create({
  container: {
    boxShadow: shadows.shadow3,
  },
});
