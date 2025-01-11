import type { Meta, StoryObj } from '@storybook/react';

import { SearchResultHeader } from './SearchResultHeader';

const meta = {
  argTypes: {},
  component: SearchResultHeader,
  parameters: {
    layout: 'centered',
  },
  title: 'pages/search-result/components/SearchResultHeader',
} satisfies Meta<typeof SearchResultHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchResultHeaderStory: Story = {
  args: {
    articleCount: 10,
    keyword: '증여세',
  },
};

SearchResultHeaderStory.storyName = 'SearchResultHeader';
