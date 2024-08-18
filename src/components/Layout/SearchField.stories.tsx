import type { Meta, StoryObj } from '@storybook/react';

import { SearchField } from './SearchField';

const meta = {
  argTypes: {},
  component: SearchField,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Layout/SearchField',
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchFieldStory: Story = {
  args: {},
};

SearchFieldStory.storyName = 'SearchField';
