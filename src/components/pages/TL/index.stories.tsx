import { TLPage } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TLPage> = {
  component: TLPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <div className="w-[375px]">
      <TLPage {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof TLPage>;

export const Default: Story = {
  args: {},
};
