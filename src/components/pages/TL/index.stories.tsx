import { TL } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TL> = {
  component: TL,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <div className="w-[375px]">
      <TL {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof TL>;

export const Default: Story = {
  args: {
    tlTitle: "Hack U 2024 Osaka",
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
