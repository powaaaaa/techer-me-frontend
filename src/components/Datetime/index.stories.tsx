import { Datetime } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Datetime> = {
  component: Datetime,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Datetime>;

export const Default: Story = {
  args: {},
};
