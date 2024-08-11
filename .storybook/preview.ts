import type { Preview } from '@storybook/react';

import '@/assets/styles/reset.scss';
import '@/assets/styles/style.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
