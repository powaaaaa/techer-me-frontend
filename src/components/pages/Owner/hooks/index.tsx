import { useState } from "react";
import { EventInfoType } from "../../Join/hooks";

export type InputEventType = EventInfoType;

type UseOwnerPage = {
  userIcon: string;
  inputEvent: InputEventType;
  checked: boolean;
  handleBackPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleChangeInputEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeInputMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleIsCreateTL: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCreateQR: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const demoIcon = "https://avatars.githubusercontent.com/u/88587703?s=48&v=4";

const defaultEvent: EventInfoType = {
  name: "",
  startDate: "",
  endDate: "",
  message: "",
};

export const useOwnerPage = ({
  maxLength,
}: {
  maxLength: number;
}): UseOwnerPage => {
  const [userIcon, setUserIcon] = useState<string>(demoIcon);
  const [inputEvent, setInputEvent] = useState<InputEventType>(defaultEvent);

  const [checked, setChecked] = useState(false);
  const [count, setCount] = useState(maxLength);

  const handleBackPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("back");
  };

  const handleChangeInputEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEvent({
      ...inputEvent,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeInputMessage = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCount(maxLength - e.target.value.length);
    setInputEvent({
      ...inputEvent,
      [e.target.name]: e.target.value,
    });
  };

  const handleIsCreateTL = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setChecked((prev) => !prev);
    console.log("create TL", checked);
  };

  const handleCreateQR = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("input: ", inputEvent);
  };

  return {
    userIcon,
    inputEvent,
    checked,
    handleBackPage,
    handleChangeInputEvent,
    handleChangeInputMessage,
    handleIsCreateTL,
    handleCreateQR,
  };
};
