import { TL } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TL> = {
  component: TL,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TL>;

export const Default: Story = {
  args: {},
};
