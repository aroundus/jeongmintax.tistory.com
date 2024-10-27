import * as stylex from '@stylexjs/stylex';
import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import { Autoplay, A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Article, CoverArticle } from '@/data/article';

import { KeyVisual } from './KeyVisual';

import 'swiper/css';
import 'swiper/css/navigation';

type KeyVisualContentsProps =
  | {
      contents: Article[];
      type: 'ARTICLE';
    }
  | {
      contents: CoverArticle[];
      type: 'COVER_ARTICLE';
    };

type KeyVisualSectionProps = KeyVisualContentsProps & {
  onLikeClick: (articleIndex: number) => void;
};

export function KeyVisualSection({ contents, type, onLikeClick }: KeyVisualSectionProps) {
  return (
    <section {...stylex.props(styles.container)}>
      <Swiper
        autoplay={{ delay: 1000 * 60 }}
        loop={true}
        modules={[Autoplay, A11y, Navigation]}
        navigation={true}
        simulateTouch={false}
      >
        {contents.map((content, index) => (
          <SwiperSlide key={content.path}>
            {type === 'COVER_ARTICLE' && (
              <KeyVisual
                {...content}
                isButtonVisible
                isGradientEnabled={contents.length > 1 && index === 0}
                onLikeClick={() => {
                  onLikeClick(index);
                }}
              />
            )}
            {type === 'ARTICLE' && (
              <KeyVisual
                {...content}
                date={content.dateTime}
                onLikeClick={() => {
                  onLikeClick(index);
                }}
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
