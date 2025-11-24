import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { ArticleService } from '@/entities/article/api';

import { KeyVisual } from './KeyVisual';

type KeyVisualContentsProps =
  | {
      article: ArticleService.Article;
      articles?: never;
      onCommentClick: () => void;
    }
  | {
      article?: never;
      articles: ArticleService.Article[];
      onCommentClick?: never;
    };

type KeyVisualSectionProps = KeyVisualContentsProps & {
  onLikeClick: (articleIndex: number) => void;
};

export function KeyVisualSection({ onLikeClick, ...props }: KeyVisualSectionProps) {
  return (
    <section className="shadow-md">
      <Swiper
        autoplay={{ delay: 1000 * 60 }}
        loop={true}
        modules={[Autoplay, A11y, Navigation]}
        navigation={true}
        simulateTouch={false}
      >
        {props.article && (
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
        {props.articles &&
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
