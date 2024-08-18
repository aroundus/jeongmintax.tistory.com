import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta = {
  argTypes: {},
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Components/Layout/Header',
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderStory: Story = {
  args: {
    title: '세무회계 정민',
  },
};

HeaderStory.storyName = 'Header';
