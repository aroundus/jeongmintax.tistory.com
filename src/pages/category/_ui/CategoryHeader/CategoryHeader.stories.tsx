import type { Meta, StoryObj } from '@storybook/react';

import { CategoryHeader } from './CategoryHeader';

const meta = {
  argTypes: {},
  component: CategoryHeader,
  parameters: {
    layout: 'centered',
  },
  title: 'pages/category/_ui/CategoryHeader',
} satisfies Meta<typeof CategoryHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CategoryHeaderStory: Story = {
  args: {
    keyword: '증여세',
    articleCount: 10,
  },
};

CategoryHeaderStory.storyName = 'CategoryHeader';
