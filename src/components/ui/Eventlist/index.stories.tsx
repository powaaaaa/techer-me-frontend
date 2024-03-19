import { Eventlist } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Eventlist> = {
  component: Eventlist,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Eventlist>;

export const Default: Story = {
  args: {
    events: [
      {
        title: "Event1",
        eventId: "1",
      },
      {
        title: "Event2",
        eventId: "2",
      },
      {
        title: "Event3",
        eventId: "3",
      },
    ],
  },
};
