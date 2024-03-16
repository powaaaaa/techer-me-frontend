type Props = {
  className?: string;
};

export const TecherME_Logo: React.FC<Props> = ({ className }) => {
  return (
    <span
      className={`font-RampartOne border rounded-md border-black-lighter px-2 items-center text-center py-0.5 bg-white ${className}`}
    >
      Techer ME
    </span>
  );
};
