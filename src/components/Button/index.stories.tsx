import { Button } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    color: "primary",
    variant: "contained",
  },
};

export const Sub: Story = {
  args: {
    children: "Button",
    color: "secondary",
    variant: "contained",
  },
};

export const SubOutlined: Story = {
  args: {
    children: "Button",
    color: "secondary",
    variant: "outlined",
  },
};

export const Transparent: Story = {
  args: {
    children: "Button",
    color: "transparent",
    variant: "contained",
  },
};

export const Outlined: Story = {
  args: {
    children: "Button",
    color: "transparent",
    variant: "outlined",
  },
};
