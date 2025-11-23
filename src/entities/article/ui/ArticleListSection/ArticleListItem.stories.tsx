import type { Meta, StoryObj } from '@storybook/react';

import { ArticleListItem } from './ArticleListItem';
import type { ArticleListItemProps } from './ArticleListItem';

const meta = {
  argTypes: {},
  component: ArticleListItem,
  decorators: [
    (Story) => (
      <div className="w-3xl">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  title: 'entities/article/ArticleListSection/ArticleListItem',
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListItemStory: Story = {
  args: {
    title: '🌏 세계의 세금 문제를 함께 풀어요! OECD 국세청장회의 소식',
    summary:
      '전 세계 58개국 국세청 대표들이 남아프리카공화국 케이프타운에 모여\n            ‘OECD 국세청장회의(FTA)’를 열었어요. 이 회의는 여러 나라가 마주한 세금 문제들을 함께\n            해결하기 위해 의견을 나누는 중요한 자리랍니다.',
    path: '/19',
    author: '임현수 세무사',
    thumbnailUrl:
      'https://blog.kakaocdn.net/dna/8e1AS/dJMcahpiKqi/AAAAAAAAAAAAAAAAAAAAACz0iSGqsYeO9ZfM6IvEoN2naKnaQwY5EDYiO4ShFg8c/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1764514799&allow_ip=&allow_referer=&signature=w9MHqpozvgYqBAhOMelLEYcKh5g%3D',
    category: '#국제협력',
    categoryPath: '/category/%EA%B5%AD%EC%A0%9C%ED%98%91%EB%A0%A5',
    date: '2025-11-22',
    dateTime: '2025-11-22 23:00',
    articleId: 19,
    commentCount: 0,
    content:
      '\n          <p>\n            전 세계 58개국 국세청 대표들이 남아프리카공화국 케이프타운에 모여\n            <strong>‘OECD 국세청장회의(FTA)’</strong>를 열었어요. 이 회의는 여러 나라가 마주한 세금 문제들을 함께\n            해결하기 위해 의견을 나누는 중요한 자리랍니다.\n          </p>\n          <h2 id="인공지능(ai)과-함께하는-세금-행정">인공지능(AI)과 함께하는 세금 행정</h2>\n          <p>\n            이번 회의의 핵심 주제 중 하나는 바로 <strong>‘디지털 전환과 인공지능(AI)’</strong>이었어요. 기술이\n            발전하면서 세금을 관리하는 방식도 크게 바뀌고 있는데요, 많은 나라가 AI를 활용해 더 편리하고 공정한 세금\n            제도를 만들려고 노력하고 있어요.\n          </p>\n          <p>\n            참석자들은 각국의 경험을 공유하며, 납세자들이 쉽고 편리하게 의무를 다할 수 있도록 돕는 디지털 기술 활용\n            방안을 논의했어요.\n          </p>\n          <h2 id="개발도상국에-노하우를-나눠요">개발도상국에 노하우를 나눠요</h2>\n          <p>\n            세금 제도를 운영하는 데 어려움을 겪는 개발도상국을 돕는 <strong>‘역량 강화 지원’</strong> 방안도 중요하게\n            다뤄졌어요. 선진국들이 자신들의 경험과 기술을 나누어 주면, 개발도상국은 더 안정적으로 세금을 걷고 나라를\n            운영할 수 있게 되죠.\n          </p>\n          <p>이러한 국제적 협력은 전 세계가 함께 성장하는 데 큰 도움이 돼요.</p>\n          <h2 id="나라별로-마주-앉아-협력을-약속해요">나라별로 마주 앉아 협력을 약속해요</h2>\n          <p>\n            전체 회의뿐만 아니라, 나라별로 따로 만나서 이야기하는 시간도 가졌어요. 예를 들어, 다른 나라에 진출한 우리\n            기업들이 세금 문제로 어려움을 겪지 않도록 서로 협력하고, 국가 간 금융 정보를 교환하는 등 구체적인 논의가\n            이루어졌답니다.\n          </p>\n          <p>\n            이런 만남은 국가 간의 신뢰를 쌓고, 다국적 기업의 조세 회피 같은 국제적인 세금 문제를 해결하는 데 중요한\n            역할을 해요.\n          </p>\n          <h2 id="마무리">마무리</h2>\n          <p>\n            OECD 국세청장회의는 <strong>국제적인 세금 문제에 공동으로 대응</strong>하고, 더 나은 세금 환경을 만들기 위한\n            논의의 장이에요. 이러한 국제 공조를 통해 전 세계가 더욱 공정하고 투명한 세금 제도를 갖추게 될 것으로\n            기대돼요.\n          </p>\n        ',
    isLikeActive: true,
    likeCount: 3,
  } as ArticleListItemProps,
};

ListItemStory.storyName = 'ArticleListItem';
