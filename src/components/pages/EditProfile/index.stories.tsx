import { EditProfilePage } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EditProfilePage> = {
  component: EditProfilePage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EditProfilePage>;

export const Default: Story = {
  args: {},
};
