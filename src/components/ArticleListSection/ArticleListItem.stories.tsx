import type { Meta, StoryObj } from '@storybook/react';

import { ArticleListItem } from './ArticleListItem';

const meta = {
  argTypes: {},
  component: ArticleListItem,
  parameters: {},
  title: 'components/ArticleListSection/ArticleListItem',
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListItemStory: Story = {
  args: {
    category: '양도소득세',
    commentCount: 1234,
    date: '2024.08.12',
    isLast: false,
    isLikeActive: true,
    likeCount: 10,
    path: '/5',
    summary:
      '양도란 자산에 대한 등기 등록과 관계없이 매도, 교환, 현물출자 등으로 인하여 그 자산이 사실상 유상으로 이전되는 것을 말합니다. 따라서 농지를 교환하는 경우에도 양도소득세가 과세됩니다.',
    title: '농지를 교환하는 경우 발생하는 양도소득세',
  },
};

ListItemStory.storyName = 'ArticleListItem';
