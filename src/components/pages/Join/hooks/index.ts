import { useState } from "react";
import { useRouter } from "next/navigation";

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
const demoEvent: EventInfoType = {
  name: "HackU 2024 Osaka",
  startDate: "2024/03/15 10:00",
  endDate: "2024/03/16 18:00",
  message:
    "こんにちは！注意事項はhogehogehogehogehogefugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafugafuga",
};
const demoIcon = "https://avatars.githubusercontent.com/u/88587703?s=48&v=4";

export const useJoinPage = (): UseJoinPage => {
  const router = useRouter();
  //NOTE:  このdemoはbackendと繋げられたら消す
  const [userIcon, setUserIcon] = useState<string>(demoIcon);
  const [event, setEvent] = useState<EventInfoType>(demoEvent);

  const handleJoinEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("join");
    router.push(`/top`);
  };

  return {
    userIcon,
    event,
    handleJoinEvent,
  };
};
