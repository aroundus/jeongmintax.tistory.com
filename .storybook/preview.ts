import type { Preview } from '@storybook/react';

import '@/app/styles/globals.css';
import '@/app/styles/style.css';
import '@/app/styles/style.scss';

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
