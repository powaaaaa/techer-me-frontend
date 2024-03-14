import { createPortal } from "react-dom";
import { ModalContent } from "@/components/Modal/ModalContent";
import { Button } from "@/components/Button";
import { useState } from "react";

type Props = {
  label: string;
  children: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ label, children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
    </>
  );
};
