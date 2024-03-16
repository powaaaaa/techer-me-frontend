import type { Meta, StoryObj } from "@storybook/react";
import { StickerPreviewPage } from ".";

const meta: Meta<typeof StickerPreviewPage> = {
  component: StickerPreviewPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StickerPreviewPage>;

export const Default: Story = {
  args: {},
};
