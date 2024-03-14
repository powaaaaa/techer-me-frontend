import { Post } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Post> = {
  component: Post,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <div className="w-[375px] px-6">
      <Post {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Post>;

export const Default: Story = {
  args: {
    date: "3/12",
    time: "14:55",
    content: "Hellooooooooooooooooo, worrrrrrrrrrrrrrld!",
  },
};
