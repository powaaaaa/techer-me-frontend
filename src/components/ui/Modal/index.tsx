import { createPortal } from "react-dom";
import { ModalContent } from "@/components/ui/Modal/ModalContent";
import { Button } from "@/components/ui/Button";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  label: string;
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  className?: string;
};

export const Modal: React.FC<Props> = ({
  label,
  children,
  showModal,
  setShowModal,
  className,
}) => {
  return (
    <div className={className}>
      <Button
        className="py-[2px] px-2"
        color="secondary"
        variant="outlined"
        onClick={() => setShowModal(true)}
      >
        {label}
      </Button>
      {showModal &&
        createPortal(<ModalContent>{children}</ModalContent>, document.body)}
    </div>
  );
};
