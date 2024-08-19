import type { Meta, StoryObj } from '@storybook/react';

import { PostListItem } from './PostListItem';

const meta = {
  argTypes: {},
  component: PostListItem,
  parameters: {},
  title: 'components/Section/PostListSection/PostListItem',
} satisfies Meta<typeof PostListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListItemStory: Story = {
  args: {
    title: '농지를 교환하는 경우 발생하는 양도소득세',
    summary:
      '양도란 자산에 대한 등기 등록과 관계없이 매도, 교환, 현물출자 등으로 인하여 그 자산이 사실상 유상으로 이전되는 것을 말합니다. 따라서 농지를 교환하는 경우에도 양도소득세가 과세됩니다.',
    path: '/5',
    // thumbnailURL: 'https://blog.kakaocdn.net/dn/rVPgT/btsI0FesCej/M7uw6D9KAKalnORyUKNRtK/img.jpg',
    category: '양도소득세',
    // categoryPath: '/category/양도소득세',
    commentCount: 1234,
    date: '2024.08.12',
    // dateTime: '2024.07.29 22:30',
    isLast: false,
  },
};

ListItemStory.storyName = 'PostListItem';
