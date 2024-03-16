import { PostInput } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PostInput> = {
  component: PostInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <div className="w-[375px]">
      <PostInput {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof PostInput>;

export const Default: Story = {
  args: {
    countLimit: 500,
    count: 10,
    value: {
      id: "",
      date: "",
      time: "",
      content: "",
    },
  },
};
