import { PostList } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PostList> = {
  component: PostList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <div className="w-[375px] px-6">
      <PostList {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof PostList>;

export const Default: Story = {
  args: {
    posts: [
      {
        id: "1",
        date: "3/12",
        time: "14:55",
        content: "Hellooooooooooooooooo, worrrrrrrrrrrrrrld!",
      },
      {
        id: "wf",
        date: "3/12",
        time: "14:55",
        content: "Hellooooooooooooooooo, worrrrrrrrrrrrrrld!",
      },
      {
        id: "1tr",
        date: "3/12",
        time: "14:55",
        content: "Hellooooooooooooooooo, worrrrrrrrrrrrrrld!",
      },
      {
        id: "jyt",
        date: "3/12",
        time: "14:55",
        content: "Hellooooooooooooooooo, worrrrrrrrrrrrrrld!",
      },
      {
        id: "htrr",
        date: "3/12",
        time: "14:55",
        content: "Hellooooooooooooooooo, worrrrrrrrrrrrrrld!",
      },
    ],
  },
};
