import { CameraScan } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CameraScan> = {
  component: CameraScan,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CameraScan>;

export const Default: Story = {
  args: {},
};
