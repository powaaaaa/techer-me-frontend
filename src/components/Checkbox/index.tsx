"use client";
import { useState } from "react";
import { ReactNode } from "react";
import { IonIcon } from "@ionic/react";
import { checkmark } from "ionicons/icons";
type Props = {
  onCheckedChange: (checked: boolean) => void;
  children: ReactNode;
};

export const Checkbox: React.FC<Props> = ({ onCheckedChange, children }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onCheckedChange(newChecked);
  };

  return (
    <>
      <div className="flex items-center">
        <span
          className="w-[6.0vw] h-[6.0vw] border-solid border-[0.7vw] border-black rounded"
          onClick={handleClick}
        >
          {checked && (
            <IonIcon icon={checkmark} className="w-[4.6vw] h-[4.6vw] " />
          )}
        </span>
        <div className="px-[4vw] font-bold">{children}</div>
      </div>
    </>
  );
};
