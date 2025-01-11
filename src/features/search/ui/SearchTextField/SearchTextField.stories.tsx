import type { Meta, StoryObj } from '@storybook/react';

import { SearchTextField } from './SearchTextField';

const meta = {
  argTypes: {},
  component: SearchTextField,
  parameters: {
    layout: 'centered',
  },
  title: 'features/search/SearchTextField',
} satisfies Meta<typeof SearchTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchTextFieldStory: Story = {
  args: {},
};

SearchTextFieldStory.storyName = 'SearchTextField';
