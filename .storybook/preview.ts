import type { Preview } from '@storybook/react';

import '@/app/styles/reset.scss';
import '@/app/styles/global.scss';

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
