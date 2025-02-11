import type { Meta, StoryObj } from '@storybook/react';

import { HeaderDesktop } from './HeaderDesktop';

const meta = {
  argTypes: {},
  component: HeaderDesktop,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'app/Layout/HeaderDesktop',
} satisfies Meta<typeof HeaderDesktop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderStory: Story = {
  args: {},
};

HeaderStory.storyName = 'HeaderDesktop';
