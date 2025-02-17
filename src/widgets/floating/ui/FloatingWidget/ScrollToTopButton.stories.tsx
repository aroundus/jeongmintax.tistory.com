import { useEffect, useState } from 'react';

import type { Meta } from '@storybook/react';
import { throttle } from 'lodash-es';

import { ScrollToTopButton } from './ScrollToTopButton';

const meta = {
  argTypes: {},
  component: ScrollToTopButton,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'widgets/floating/FloatingWidget/ScrollToTopButton',
} satisfies Meta<typeof ScrollToTopButton>;

export default meta;

export function ScrollToTopButtonStory() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    const throttledScroll = throttle(handleScroll, 100);

    handleScroll();
    window.addEventListener('scroll', throttledScroll);
  }, []);

  return (
    <>
      <section style={{ height: '1000vh' }} />
      <span
        style={{
          left: 24,
          position: 'fixed',
          top: 24,
        }}
      >
        {scrollY}
      </span>
      <ScrollToTopButton />
    </>
  );
}

ScrollToTopButtonStory.storyName = 'ScrollToTopButton';
