import { StickerList } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StickerList> = {
  component: StickerList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <div className="w-96">
      <StickerList {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof StickerList>;

export const Default: Story = {
  args: {
    techers: [
      {
        image: "https://avatars.githubusercontent.com/u/88587703?s=48&v=4",
        name: "yamato0211",
        times: 0,
      },
      {
        image: "https://avatars.githubusercontent.com/u/111046707?v=4",
        name: "powaaaaa",
        times: 1,
      },
      {
        image: "https://avatars.githubusercontent.com/u/126382452?v=4",
        name: "Sea10wood",
        times: 2,
      },
    ],
  },
};
