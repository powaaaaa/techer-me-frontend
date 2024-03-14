"use client";
import { useEffect, useState } from "react";
import { TecherType, StickerList } from "../StickerList";

type Props = {};

type Event = {
  id: number;
  name: string;
  date: string;
  place: string;
  description: string;
};

type UserData = {
  id: string;
  name: string;
  Events: Event[];
  stickers: TecherType[];
};

export const Top: React.FC<Props> = ({}) => {
  const [Event, setEvent] = useState<Event>();
  const [Techers, setTechers] = useState<TecherType[]>();
  const [userId, setUserId] = useState<string>();

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:8080/swagger/${userId}/doc.json`)
        .then((res) => res.json())
        .then((data) => {
          setEvent(data);
        });
    }
  }, [userId]);

  return (
    <>
      <div>
        <h1>{Event?.name}</h1>
        <StickerList techers={Techers ?? []}></StickerList>
      </div>
    </>
  );
};
