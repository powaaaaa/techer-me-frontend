import { JoinPage } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof JoinPage> = {
  component: JoinPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <div className="w-[375px]">
      <JoinPage {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof JoinPage>;

export const Default: Story = {
  args: {},
};
