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
        articleCount: getRandomNumber(4),
        name: '전체',
      },
      {
        articleCount: getRandomNumber(4),
        name: '사과',
      },
      {
        articleCount: getRandomNumber(4),
        name: '바나나',
      },
      {
        articleCount: getRandomNumber(4),
        name: '딸기',
      },
      {
        articleCount: getRandomNumber(4),
        name: '토마토',
      },
    ],
  },
};

CategoryFieldStory.storyName = 'CategoryField';
