"use client";
import { useEffect, useState } from "react";
import { TecherType, StickerList } from "../StickerList";
import { fetchUserData, getData } from "./hooks/fetchdata";

type Props = {};

type Event = {
  event_id: string;
  finished_at: string;
  image_url: string;
  message: string;
  name: string;
  owner_id: string;
  started_at: string;
};

type Skills = {
  [key: string]: string;
};

type URLs = {
  [key: string]: string;
};

type UserData = {
  events: Event[];
  image_url: string;
  is_organizer: boolean;
  message: string;
  name: string;
  skills: Skills;
  urls: URLs;
  user_id: string;
};

export const Top: React.FC<Props> = ({}) => {
  const [Event, setEvent] = useState<Event>();
  const [Techers, setTechers] = useState<TecherType[]>();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        getData(token).then((data) => setTechers(data));
      }
    };
    fetchData();
  }, [token]);

  return (
    <>
      <div>
        <h1></h1>
        <StickerList techers={Techers ?? []}></StickerList>
      </div>
    </>
  );
};
