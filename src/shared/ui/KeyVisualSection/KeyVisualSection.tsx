import * as stylex from '@stylexjs/stylex';
import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import { Autoplay, A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Article, CoverArticle } from '@/entities/article/api';

import { KeyVisual } from './KeyVisual';

import 'swiper/css';
import 'swiper/css/navigation';

type KeyVisualContentsProps =
  | {
      article: Article;
      articles?: never;
      type: 'ARTICLE';
      onCommentClick: () => void;
    }
  | {
      article?: never;
      articles: CoverArticle[];
      type: 'COVER_ARTICLE';
      onCommentClick?: never;
    };

type KeyVisualSectionProps = KeyVisualContentsProps & {
  onLikeClick: (articleIndex: number) => void;
};

export function KeyVisualSection({ type, onLikeClick, ...props }: KeyVisualSectionProps) {
  return (
    <section {...stylex.props(styles.container)}>
      <Swiper
        autoplay={{ delay: 1000 * 60 }}
        loop={true}
        modules={[Autoplay, A11y, Navigation]}
        navigation={true}
        simulateTouch={false}
      >
        {type === 'ARTICLE' && props.article && (
          <KeyVisual
            {...props.article}
            date={props.article.dateTime}
            onCommentClick={() => {
              props.onCommentClick();
            }}
            onLikeClick={() => {
              onLikeClick(0);
            }}
          />
        )}
        {type === 'COVER_ARTICLE' &&
          props.articles &&
          props.articles.map((content, index) => (
            <SwiperSlide key={content.path}>
              <KeyVisual
                {...content}
                isButtonVisible
                isGradientEnabled={props.articles.length > 1 && index === 0}
                onLikeClick={() => {
                  onLikeClick(index);
                }}
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
