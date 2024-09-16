import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta = {
  argTypes: {},
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'components/Layout/Header',
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderStory: Story = {
  args: {
    symbolMarkURL:
      'https://img1.daumcdn.net/thumb/C32x32/?scode=mtistory2&fname=https%3A%2F%2Ftistory1.daumcdn.net%2Ftistory%2F6688464%2F55983285d3f6410fb55a2b70535bca86',
    title: '세무회계 정민',
  },
};

HeaderStory.storyName = 'Header';
