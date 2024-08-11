import * as stylex from '@stylexjs/stylex';
import { shadows } from '@stylexjs/open-props/lib/shadows.stylex';
import { Autoplay, A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getCoverItems } from '@/data/cover';

import { KeyVisual } from './KeyVisual';

import 'swiper/css';
import 'swiper/css/navigation';

export function KeyVisualSection() {
  const coverItems = getCoverItems('KEY_VISUAL');

  return (
    <section {...stylex.props(styles.container)}>
      <Swiper
        autoplay={{ delay: 1000 * 60 }}
        loop={true}
        modules={[Autoplay, A11y, Navigation]}
        navigation={true}
      >
        {coverItems.map((coverItem, index) => (
          <SwiperSlide key={coverItem.path}>
            <KeyVisual
              coverItem={coverItem}
              isGradientEnabled={index === 0}
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
