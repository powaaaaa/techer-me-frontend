import { QRExchangePage } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof QRExchangePage> = {
  component: QRExchangePage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof QRExchangePage>;

export const Default: Story = {
  args: {},
};
