import { Sticker } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sticker> = {
  component: Sticker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Sticker>;

export const Default: Story = {
  args: {
    src: "https://avatars.githubusercontent.com/u/88587703?s=48&v=4",
  },
};
