import { Techer } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Techer> = {
  component: Techer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Techer>;

export const Default: Story = {
  args: {
    src: "https://avatars.githubusercontent.com/u/88587703?s=48&v=4",
    techerName: "yamato0211",
    times: 2,
  },
};
