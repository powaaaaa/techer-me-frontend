import { Textarea } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    maxStringLength: 1000,
  },
};
