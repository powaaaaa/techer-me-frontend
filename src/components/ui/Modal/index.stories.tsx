import { Modal } from ".";

import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;

const Content = () => {
  return <p className="p-4">モーダルの中身</p>;
};

export const Default: Story = {
  args: {
    label: "modal",
    children: <Content />,
  },
};
