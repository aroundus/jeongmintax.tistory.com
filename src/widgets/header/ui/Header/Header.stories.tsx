import type { Meta, StoryObj } from '@storybook/react';

import { DesktopHeader } from './DesktopHeader';

const meta = {
  argTypes: {},
  component: DesktopHeader,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'widgets/Header/DesktopHeader',
} satisfies Meta<typeof DesktopHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderStory: Story = {
  args: {},
};

HeaderStory.storyName = 'DesktopHeader';
