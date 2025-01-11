import type { Meta, StoryObj } from '@storybook/react';

import type { CoverArticle } from '@/entities/article/api';

import { ArticleList } from './ArticleList';

const meta = {
  argTypes: {},
  component: ArticleList,
  parameters: {},
  title: 'features/article/ArticleListSection/ArticleList',
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ArticleListStory: Story = {
  args: {
    articles: [
      {
        category: '양도소득세',
        commentCount: 100,
        date: '2024.08.18',
        isLikeActive: true,
        likeCount: 9,
        path: '/9',
        summary:
          '양도소득세는 부동산이나 주식 등의 양도로 인한 이익에 부과되는 세금입니다. 1세대 2주택 양도소득세는 다음과 같이 적용됩니다. 양도소득세 계산은 다양한 요소를 고려해야 하므로 국세청 홈택스의 양도소득세 계산기를 활용하면 정확한 세액을 확인할 수 있습니다.',
        title: '1세대 2주택을 양도하는 경우 발생하는 양도소득세',
      },
      {
        category: '증여세',
        commentCount: 0,
        date: '2024.08.18',
        isLikeActive: false,
        likeCount: 8,
        path: '/8',
        summary:
          '가족 간 증여를 할 때 증여세를 줄이는 방법 중 하나로 증여재산공제를 활용할 수 있습니다. 이 공제는 증여받은 재산의 일정 금액을 재산가액에서 공제하는 방식으로 작동합니다. 증여재산공제를 적용하면 납부할 증여세가 없거나 면제 한도로 인해 세금 부담이 줄어들 수 있습니다.',
        title: '증여재산공제를 통한 증여세 절세 방법',
      },
      {
        category: '양도소득세',
        commentCount: 1825,
        date: '2024.08.18',
        isLikeActive: true,
        likeCount: 7,
        path: '/7',
        summary:
          '양도소득세는 특정 자산이 양도됨으로 인해 발생하는 소득에 부과되는 세금입니다. 농지를 교환하는 경우, 매도자가 내야 하는 세금 중에서 가장 비중이 큰 것이 양도소득세입니다. 이 세금을 정확히 이해하면 절세에 도움이 됩니다.',
        title: '농지를 교환하는 경우 발생하는 양도소득세',
      },
    ] as CoverArticle[],
  },
};

ArticleListStory.storyName = 'ArticleList';
