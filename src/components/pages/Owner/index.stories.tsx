import { OwnerPage } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof OwnerPage> = {
  component: OwnerPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof OwnerPage>;

export const Default: Story = {
  args: {},
};
