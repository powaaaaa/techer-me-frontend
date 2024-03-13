import { StickerList } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StickerList> = {
  component: StickerList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StickerList>;

export const Default: Story = {
  args: {},
};
