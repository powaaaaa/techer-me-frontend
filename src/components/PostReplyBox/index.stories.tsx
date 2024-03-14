import { PostReplyBox } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PostReplyBox> = {
  component: PostReplyBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PostReplyBox>;

export const Default: Story = {
  args: {},
};
