import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandImage: require('./assets/images/logo.png'),
    colorPrimary: '94b080',
  },
});
