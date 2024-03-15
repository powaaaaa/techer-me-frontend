import type { Meta, StoryObj } from '@storybook/react';
import { StickerPreview } from '.';

const meta: Meta<typeof StickerPreview> = {
  component: StickerPreview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StickerPreview>;

export const Default: Story = {
  args: {},
};
