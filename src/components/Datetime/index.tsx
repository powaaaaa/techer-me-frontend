import { ReactNode } from "react";
import Styles from "./index.module.css";

type Props = {
  setDatetime: (datetime: Date) => void;

  children: ReactNode;
};

export const Datetime: React.FC<Props> = ({ setDatetime, children }) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setDatetime(date);
  };

  return (
    <>
      <div className="flex w-[85vw] px-[20px] py-[10px] justify-between border-solid border-[0.4px] border-[#000000] rounded-[4px]">
        <div className=" font-bold">{children}</div>
        <input
          type="datetime-local"
          onChange={handleDateChange}
          className={`${Styles.datetime} font-bold`}
        />
      </div>
    </>
  );
};
