import { Card } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    handleName: "handleName",
    organization: "organization",
    events: ["events1", "events2", "events3"],
    github: "github",
    twitter: "twitter",
    discord: "discord",
    website: ["website1", "website2"],
  },
};
