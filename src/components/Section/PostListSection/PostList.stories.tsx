import type { Meta, StoryObj } from '@storybook/react';

import { PostList } from './PostList';

const meta = {
  argTypes: {},
  component: PostList,
  parameters: {},
  title: 'components/Section/PostListSection/PostList',
} satisfies Meta<typeof PostList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PostListStory: Story = {
  args: {
    contents: [
      {
        title: '1세대 2주택을 양도하는 경우 발생하는 양도소득세',
        summary:
          '양도소득세는 부동산이나 주식 등의 양도로 인한 이익에 부과되는 세금입니다. 1세대 2주택 양도소득세는 다음과 같이 적용됩니다. 양도소득세 계산은 다양한 요소를 고려해야 하므로 국세청 홈택스의 양도소득세 계산기를 활용하면 정확한 세액을 확인할 수 있습니다.',
        path: '/9',
        // thumbnailURL: 'https://blog.kakaocdn.net/dn/d2Lx19/btsI7GwKEtn/ZlNLyEqQdzQZbVJrtKUzs1/img.jpg',
        category: '양도소득세',
        // categoryPath: '/category/양도소득세',
        commentCount: 100,
        date: '2024.08.18',
        // dateTime: '2024.08.18 02:46',
      },
      {
        title: '증여재산공제를 통한 증여세 절세 방법',
        summary:
          '가족 간 증여를 할 때 증여세를 줄이는 방법 중 하나로 증여재산공제를 활용할 수 있습니다. 이 공제는 증여받은 재산의 일정 금액을 재산가액에서 공제하는 방식으로 작동합니다. 증여재산공제를 적용하면 납부할 증여세가 없거나 면제 한도로 인해 세금 부담이 줄어들 수 있습니다.',
        path: '/8',
        // thumbnailURL: 'https://blog.kakaocdn.net/dn/1wXGn/btsI6ReMKmD/BTUf1hLQAfSTXVjJb95Atk/img.jpg',
        category: '증여세',
        // categoryPath: '/category/증여세',
        commentCount: 0,
        date: '2024.08.18',
        // dateTime: '2024.08.18 02:33',
      },
      {
        title: '농지를 교환하는 경우 발생하는 양도소득세',
        summary:
          '양도소득세는 특정 자산이 양도됨으로 인해 발생하는 소득에 부과되는 세금입니다. 농지를 교환하는 경우, 매도자가 내야 하는 세금 중에서 가장 비중이 큰 것이 양도소득세입니다. 이 세금을 정확히 이해하면 절세에 도움이 됩니다.',
        path: '/7',
        // thumbnailURL: 'https://blog.kakaocdn.net/dn/EtDZv/btsI76V9d9H/3fo1icmqfTsg5j6dqKRK5K/img.jpg',
        category: '양도소득세',
        // categoryPath: '/category/양도소득세',
        commentCount: 1825,
        date: '2024.08.18',
        // dateTime: '2024.08.18 02:23',
      },
    ],
  },
};

PostListStory.storyName = 'PostList';
