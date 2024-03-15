import { useState } from "react";

export type EventInfoType = {
  name: string;
  startDate: string;
  endDate: string;
  message: string;
};

type UseJoinPage = {
  userIcon: string;
  event: EventInfoType;
  handleJoinEvent: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const defaultEvent: EventInfoType = {
  name: "",
  startDate: "",
  endDate: "",
  message: "",
};

//NOTE:  このdemoはbackendと繋げられたら消す
const demo: EventInfoType = {
  name: "HackU 2024 Osaka",
  startDate: "2024/03/15 10:00",
  endDate: "2024/03/16 18:00",
  message:
    "こんにちは！注意事項はhogehogehogehogehogefugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafuga",
};

export const useJoinPage = (): UseJoinPage => {
  const [userIcon, setUserIcon] = useState<string>("");
  //NOTE:  このdemoはbackendと繋げられたら消す
  const [event, setEvent] = useState<EventInfoType>(demo);

  const handleJoinEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("join");
  };

  return {
    userIcon,
    event,
    handleJoinEvent,
  };
};
