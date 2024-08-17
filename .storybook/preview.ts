import type { Preview } from '@storybook/react';

import '@/assets/styles/reset.scss';
import '@/assets/styles/global.scss';

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
