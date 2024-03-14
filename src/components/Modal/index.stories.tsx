import { Modal } from ".";

import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/Button";

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
  return (
    <div>
      <p className="p-4">モーダルの中身</p>

      <div className="flex justify-center border-t-[0.4px] border-black">
        <Button className="py-[10px]" color="transparent">
          キャンセル
        </Button>
        <div className="w-[0.4px] bg-black mx-5"></div>
        <Button className="py-[2px]" color="transparent">
          退出する
        </Button>
      </div>
    </div>
  );
};

export const Default: Story = {
  args: {
    label: "modal",
    children: <Content />,
  },
};
