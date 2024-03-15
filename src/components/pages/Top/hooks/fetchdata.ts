// type Event = {
//   event_id: string;
//   finished_at: string;
//   image_url: string;
//   message: string;
//   name: string;
//   owner_id: string;
//   started_at: string;
// };

import { TecherType } from "@/components/ui/Techer";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";

// type Skills = {
//   [key: string]: string;
// };

// type URLs = {
//   [key: string]: string;
// };

// type UserData = {
//   events: Event[];
//   image_url: string;
//   is_organizer: boolean;
//   message: string;
//   name: string;
//   skills: Skills;
//   urls: URLs;
//   user_id: string;
// };

type TecherData = {
  event_id: string;
  user_id: string;
};

export type ExchangeType = {
  image_url: string;
  message: string;
  name: string;
  skills: {
    [key: string]: string;
  };
  times: number;
  urls: {
    [key: string]: string;
  };
  user_id: string;
};

export type StickerType = {
  image_url: "string";
  user_id: "string";
  x: 0;
  y: 0;
};

export type GetExchangeType = {
  exchanges: ExchangeType[];
  stickers: StickerType[];
};

// type UseTopPage = {
//   userIcon: string;
//   handleShowPreview: (
//     e: React.MouseEvent<HTMLButtonElement>,
//     techer: TecherType
//   ) => void;
// };

type UseTopPage = {
  techers: TecherType[];
};

export const useTopPage = (): UseTopPage => {
  const [techers, setTechers] = useState<TecherType[]>([]);

  const getData = async (token: string) => {
    try {
      const response = await fetch(
        "https://server-u7kyixk36q-an.a.run.app/exchanges",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const jsonData: GetExchangeType = await response.json();

      const newTechers = jsonData.exchanges.map((exchange) => {
        return {
          id: exchange.user_id,
          image: exchange.image_url,
          name: exchange.name,
          times: exchange.times,
        };
      });
      setTechers(newTechers);

      //refactTecherDataを使ってTecherTypeの配列を作成
      // const TechersType = refactTecherData(jsonData, token);
      // return TechersType;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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

  return { techers };
};

export const DataToTecherType = (originData: GetExchangeType) => {
  const newTechers = originData.exchanges.map((exchange) => {
    return {
      id: exchange.user_id,
      image: exchange.image_url,
      name: exchange.name,
      times: exchange.times,
    };
  });
  return newTechers;
};

export const refactTecherData = async (
  TechersData: TecherData[],
  token: string
) => {
  //同じuser_idの無い配列を作成
  const uniqueTechersData = TechersData.filter(
    (techer, i, self) =>
      self.findIndex((t) => t.user_id === techer.user_id) === i
  );
  //uniqueTechersDataの重複した回数の配列を作成
  const Techers = uniqueTechersData.map((techer) => {
    const times = TechersData.filter(
      (t) => t.user_id === techer.user_id
    ).length;
    return {
      user_id: techer.user_id,
      times,
    };
  });
  //uniqueTechersDataのuser_idからUserDataの配列を作成
  const UserData = await Promise.all(
    Techers.map(async (techer) => {
      //fetchUserDataを使ってUserDataを取得
      const user: UserData = await fetchUserData(techer.user_id, token);
      //UserDataの画像をと名前を取得
      const image = user.image_url;
      const name = user.name;
      return {
        image,
        name,
      };
    })
  );
  //TecherTypeの配列を作成
  const TechersType = UserData.map((user, i) => {
    return {
      image: user.image,
      name: user.name,
      times: Techers[i].times,
    };
  });
  return TechersType;
};
