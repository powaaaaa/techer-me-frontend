import { NewEventScanPage } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NewEventScanPage> = {
  component: NewEventScanPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NewEventScanPage>;

export const Default: Story = {
  args: {},
};
