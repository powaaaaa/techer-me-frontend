"use client";
import { ComponentPropsWithoutRef } from "react";
import { CheckMark } from "../icons/CheckMark";

type Props = {
  label: string;
  checked: boolean;
  className?: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & ComponentPropsWithoutRef<"button">;

export const Checkbox: React.FC<Props> = ({
  label,
  checked,
  className,
  handleClick,
}) => {
  return (
    <>
      <div className={`flex items-center ${className}`}>
        <button
          className="min-w-6 min-h-6 border-[3px] border-black rounded"
          onClick={handleClick}
        >
          {checked && <CheckMark />}
        </button>
        <label className="pl-2.5 font-bold">{label}</label>
      </div>
    </>
  );
};
