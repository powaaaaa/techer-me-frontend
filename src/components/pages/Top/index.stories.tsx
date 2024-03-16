import { TopPage } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TopPage> = {
  component: TopPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TopPage>;

export const Default: Story = {
  args: {},
};
