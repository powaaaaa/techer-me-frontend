import { JoinPage } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof JoinPage> = {
  component: JoinPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <div className="w-[375px]">
      <JoinPage {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof JoinPage>;

export const Default: Story = {
  args: {
    userIcon: "https://avatars.githubusercontent.com/u/88587703?s=48&v=4",
    eventName: "HackU 2024 Osaka",
    startDate: "2024/03/15 10:00",
    endDate: "2024/03/16 18:00",
    eventMessage:
      "こんにちは！注意事項はhogehogehogehogehogefugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafuga",
  },
};
