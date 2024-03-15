import { OwnerPage } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof OwnerPage> = {
  component: OwnerPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <div className="w-[375px]">
      <OwnerPage {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof OwnerPage>;

export const Default: Story = {
  args: {},
};
