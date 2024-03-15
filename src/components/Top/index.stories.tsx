import { Top } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Top> = {
  component: Top,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Top>;

export const Default: Story = {
  args: {},
};
