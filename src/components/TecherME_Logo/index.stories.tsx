import RootLayout from "@/app/layout";
import { TecherME_Logo } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TecherME_Logo> = {
  component: TecherME_Logo,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <RootLayout>
        <div className="w-full h-full flex justify-center items-center">

        <Story />
        </div>
      </RootLayout>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TecherME_Logo>;

export const Default: Story = {
  args: {},
};
