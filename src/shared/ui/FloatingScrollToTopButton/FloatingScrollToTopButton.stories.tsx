import { useEffect, useState } from 'react';
import type { Meta } from '@storybook/react';

import { throttle } from 'lodash-es';

import { FloatingScrollToTopButton } from './FloatingScrollToTopButton';

const meta = {
  argTypes: {},
  component: FloatingScrollToTopButton,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'pages/page/components/FloatingScrollToTopButton',
} satisfies Meta<typeof FloatingScrollToTopButton>;

export default meta;

export function FloatingScrollToTopButtonStory() {
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
      <FloatingScrollToTopButton />
    </>
  );
}

FloatingScrollToTopButtonStory.storyName = 'FloatingScrollToTopButton';
