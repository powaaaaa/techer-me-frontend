import { ModalContent } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ModalContent> = {
  component: ModalContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ModalContent>;

export const Default: Story = {
  args: {
    children: "モーダルの中身",
  },
};
