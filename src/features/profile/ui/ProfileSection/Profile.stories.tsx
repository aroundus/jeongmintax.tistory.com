import type { Meta, StoryObj } from '@storybook/react';

import { Profile } from './Profile';

const meta = {
  argTypes: {},
  component: Profile,
  parameters: {
    layout: 'centered',
  },
  title: 'components/ProfileSection/Profile',
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileStory: Story = {
  args: {
    description:
      '세무법과 관련된 최신 정보와 전략을 공유하며 고객들의 비즈니스 성장을 돕고 있습니다. 세무 문제에 대한 궁금증이 있으시면 언제든지 문의해 주세요.',
    imageURL: 'https://ssl.pstatic.net/static/kin/09renewal/avatar/200x200_m/2_3d.png',
    menu: [
      {
        name: '📞 상담 신청',
        path: '/page/consultation',
      },
      {
        name: '📍 상담 신청',
        path: '/page/location',
      },
    ],
    name: '임현수 세무사',
  },
};

ProfileStory.storyName = 'Profile';
