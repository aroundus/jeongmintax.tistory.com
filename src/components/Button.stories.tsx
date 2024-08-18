import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  argTypes: {},
  component: Button,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Button',
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
  args: {
    children: '버튼',
    color: 'primary',
    isLoading: false,
    size: 'sm',
    variant: 'contained',
  },
};

ButtonStory.storyName = 'Button';
