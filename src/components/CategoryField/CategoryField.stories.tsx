import type { Meta, StoryObj } from '@storybook/react';

import { getRandomNumber } from '@/helpers/math';

import { CategoryField } from './CategoryField';

const meta = {
  argTypes: {},
  component: CategoryField,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'components/CategoryField',
} satisfies Meta<typeof CategoryField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CategoryFieldStory: Story = {
  args: {
    categories: [
      {
        name: '전체',
        postCount: getRandomNumber(4),
      },
      {
        name: '사과',
        postCount: getRandomNumber(4),
      },
      {
        name: '바나나',
        postCount: getRandomNumber(4),
      },
      {
        name: '딸기',
        postCount: getRandomNumber(4),
      },
      {
        name: '토마토',
        postCount: getRandomNumber(4),
      },
    ],
  },
};

CategoryFieldStory.storyName = 'CategoryField';
