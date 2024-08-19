import * as stylex from '@stylexjs/stylex';
import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import { Autoplay, A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Article } from '@/data/article';
import type { Post } from '@/data/post';

import { KeyVisual } from './KeyVisual';

import 'swiper/css';
import 'swiper/css/navigation';

type KeyVisualSectionProps =
  | {
      type: 'ARTICLE';
      contents: Article[];
    }
  | {
      type: 'MAIN';
      contents: Post[];
    };

export function KeyVisualSection({ contents, type }: KeyVisualSectionProps) {
  return (
    <section {...stylex.props(styles.container)}>
      <Swiper
        autoplay={{ delay: 1000 * 60 }}
        loop={true}
        modules={[Autoplay, A11y, Navigation]}
        navigation={true}
      >
        {contents.map((content, index) => (
          <SwiperSlide key={content.path}>
            {type === 'MAIN' && (
              <KeyVisual
                {...content}
                isButtonVisible
                isGradientEnabled={contents.length > 1 && index === 0}
              />
            )}
            {type === 'ARTICLE' && (
              <KeyVisual
                {...content}
                date={content.dateTime}
              />
            )}
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
