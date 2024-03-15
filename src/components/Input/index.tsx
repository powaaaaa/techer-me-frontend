import { ComponentPropsWithoutRef } from "react";

type Props = {
  message?: string;
} & ComponentPropsWithoutRef<"input">;

export const Input: React.FC<Props> = ({ message, ...props }) => {
  return (
    <>
      <input
        className="min-w-[330px] w-full px-2 py-1 border-[0.4px] border-black rounded"
        {...props}
      />
      {message && <p className="mt-[6px] font-bold text-red">{message}</p>}
    </>
  );
};
