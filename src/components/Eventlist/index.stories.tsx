import { Eventlist } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Eventlist> = {
  component: Eventlist,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Eventlist>;

export const Default: Story = {
  args: {},
};
