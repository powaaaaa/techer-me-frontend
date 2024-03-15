import { Join } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Join> = {
  component: Join,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <div className="w-[375px]">
      <Join {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Join>;

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
