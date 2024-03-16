import { QRcode } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof QRcode> = {
  component: QRcode,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof QRcode>;

export const Default: Story = {
  args: {
    url: "https://www.google.co.jp/",
  },
};
