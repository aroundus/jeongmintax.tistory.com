import * as stylex from '@stylexjs/stylex';
import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import { Autoplay, A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Post } from '@/data/post';

import { KeyVisual } from './KeyVisual';

import 'swiper/css';
import 'swiper/css/navigation';

interface KeyVisualSectionProps {
  isButtonVisible?: boolean;
  posts: Post[];
}

export function KeyVisualSection({ isButtonVisible, posts }: KeyVisualSectionProps) {
  return (
    <section {...stylex.props(styles.container)}>
      <Swiper
        autoplay={{ delay: 1000 * 60 }}
        loop={true}
        modules={[Autoplay, A11y, Navigation]}
        navigation={true}
      >
        {posts.map((post, index) => (
          <SwiperSlide key={post.path}>
            <KeyVisual
              post={post}
              isButtonVisible={isButtonVisible}
              isGradientEnabled={posts.length > 1 && index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

const styles = stylex.create({
  container: {
    boxShadow: shadows.shadow2,
  },
});
