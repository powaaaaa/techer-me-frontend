import { ComponentPropsWithoutRef } from "react";
import Styles from "./index.module.css";
import { Calender } from "../icons/calender";

type Props = {
  label: string;
} & ComponentPropsWithoutRef<"input">;

export const Datetime: React.FC<Props> = ({ label, ...props }) => {
  return (
    <div className="flex w-full px-4 py-1 justify-between items-center bg-white border-[0.4px] border-black rounded">
      <span className="text-xs font-bold">{label}</span>

      <div className="flex items-center">
        <span className="pr-2">
          <Calender />
        </span>
        <input
          type="datetime-local"
          className={`${Styles.iconDel} relative text-sm font-bold focus:outline-none`}
          {...props}
        />
      </div>
    </div>
  );
};
