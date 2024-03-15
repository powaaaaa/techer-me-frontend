import { EditProfile } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EditProfile> = {
  component: EditProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EditProfile>;

export const Default: Story = {
  args: {},
};
