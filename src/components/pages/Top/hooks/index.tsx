import { TecherType } from "@/components/ui/Techer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { firebaseConfig } from "@/lib/firebase/firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

type UseTopPage = {
  userIcon: string;
  techers: TecherType[];
  handleShowPreview: (
    e: React.MouseEvent<HTMLButtonElement>,
    techer: TecherType
  ) => void;
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const useTopPage = (): UseTopPage => {
  const router = useRouter();
  const [userIcon, setUserIcon] = useState<string>("");
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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = auth.currentUser?.getIdToken();
      if (token) {
        console.log("token is found");
        setUserIcon(auth.currentUser?.photoURL || "");
        const tokenValue = await token;
        await getData(tokenValue);
      } else {
        console.log("token is not found");
      }
    };

    fetchData();
  }, []);

  const handleShowPreview = (
    e: React.MouseEvent<HTMLButtonElement>,
    techer: TecherType
  ) => {
    e.preventDefault();
    router.push("/stickerPreview");
    console.log(techer);
  };

  return { techers, userIcon, handleShowPreview };
};
