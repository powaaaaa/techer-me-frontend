import { QRPage } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof QRPage> = {
  component: QRPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <div className="w-[375px]">
      <QRPage {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof QRPage>;

export const Default: Story = {
  args: {},
};
