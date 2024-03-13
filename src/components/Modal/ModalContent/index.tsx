type Props = {
  children: React.ReactNode;
};

export const ModalContent: React.FC<Props> = ({ children }) => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div className="min-w-56 bg-white rounded">{children}</div>
    </div>
  );
};
