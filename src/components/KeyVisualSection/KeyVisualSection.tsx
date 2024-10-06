import * as stylex from '@stylexjs/stylex';
import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import { Autoplay, A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Article, CoverArticle } from '@/data/article';

import { KeyVisual } from './KeyVisual';

import 'swiper/css';
import 'swiper/css/navigation';

type KeyVisualSectionProps =
  | {
      contents: Article[];
      type: 'ARTICLE';
    }
  | {
      contents: CoverArticle[];
      type: 'COVER_ARTICLE';
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
            {type === 'COVER_ARTICLE' && (
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
