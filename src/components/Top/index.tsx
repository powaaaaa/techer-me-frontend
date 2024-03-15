"use client";
import { useEffect, useState } from "react";
import { Sticker } from "@/components/Sticker";
import { TecherType, StickerList } from "../StickerList";
import { fetchUserData, getData } from "./hooks/fetchdata";
import { firebaseConfig } from "@/lib/firebase/firebase";
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "../Button";

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

const testtecher: TecherType[] = [
  {
    image: "https://avatars.githubusercontent.com/u/88587703?s=48&v=4",
    name: "yamato0211",
    times: 0,
  },
  {
    image: "https://avatars.githubusercontent.com/u/111046707?v=4",
    name: "powaaaaa",
    times: 1,
  },
  {
    image: "https://avatars.githubusercontent.com/u/126382452?v=4",
    name: "Sea10wood",
    times: 2,
  },
  {
    image: "https://avatars.githubusercontent.com/u/88587703?s=48&v=4",
    name: "yamato0211",
    times: 0,
  },
  {
    image: "https://avatars.githubusercontent.com/u/111046707?v=4",
    name: "powaaaaa",
    times: 1,
  },
  {
    image: "https://avatars.githubusercontent.com/u/126382452?v=4",
    name: "Sea10wood",
    times: 2,
  },
  {
    image: "https://avatars.githubusercontent.com/u/88587703?s=48&v=4",
    name: "yamato0211",
    times: 0,
  },
  {
    image: "https://avatars.githubusercontent.com/u/111046707?v=4",
    name: "powaaaaa",
    times: 1,
  },
  {
    image: "https://avatars.githubusercontent.com/u/126382452?v=4",
    name: "Sea10wood",
    times: 2,
  },
  {
    image: "https://avatars.githubusercontent.com/u/88587703?s=48&v=4",
    name: "yamato0211",
    times: 0,
  },
  {
    image: "https://avatars.githubusercontent.com/u/111046707?v=4",
    name: "powaaaaa",
    times: 1,
  },
  {
    image: "https://avatars.githubusercontent.com/u/126382452?v=4",
    name: "Sea10wood",
    times: 2,
  },
  {
    image: "https://avatars.githubusercontent.com/u/88587703?s=48&v=4",
    name: "yamato0211",
    times: 0,
  },
  {
    image: "https://avatars.githubusercontent.com/u/111046707?v=4",
    name: "powaaaaa",
    times: 1,
  },
  {
    image: "https://avatars.githubusercontent.com/u/126382452?v=4",
    name: "Sea10wood",
    times: 2,
  },
  {
    image: "https://avatars.githubusercontent.com/u/88587703?s=48&v=4",
    name: "yamato0211",
    times: 0,
  },
];

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const Top: React.FC<Props> = ({}) => {
  const [Event, setEvent] = useState<Event>();
  const [Techers, setTechers] = useState<TecherType[]>();

  useEffect(() => {
    const fetchData = async () => {
      const token = auth.currentUser?.getIdToken();
      if (token) {
        console.log("token is found");
        const tokenValue = await token;
        const Techers = await getData(tokenValue);
        setTechers(Techers);
      } else {
        console.log("token is not found");
      }
    };
    fetchData();
  }, [app]);

  //githubログイン
  const handleShowPreview = (
    e: React.MouseEvent<HTMLButtonElement>,
    techer: TecherType
  ) => {
    console.log(techer);
  };

  return (
    <>
      <div className="flex flex-col items-center my-5">
        <Button color="primary" variant="contained">
          イベント登録
        </Button>
        <div className="my-5 w-full flex flex-col items-center">
          <div className="w-[90%] max-w-[500px] text-sm px-[50px] m">
            保有ステッカー
          </div>
          <div className="flex flex-col items-center h-[60vh] w-[90%] max-w-[500px] overflow-auto ">
            <StickerList
              techers={testtecher}
              handleShowPreview={handleShowPreview}
            />
          </div>
          <div className="flex flex-col items-center my-5">
            <Sticker
              src="https://avatars.githubusercontent.com/u/88587703?s=48&v=4"
              alt="test"
            />
          </div>
        </div>
      </div>
    </>
  );
};
