"use client";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Sticker } from "@/components/ui/Sticker";
import { TecherME_Logo } from "@/components/ui/TecherME_Logo";
import { Textarea } from "@/components/ui/Textarea";
import { ArrowBack } from "@/components/icons/ArrowBack";
import { useOwnerPage } from "./hooks";
import { EventInfoType } from "../Join/hooks";
import { Input } from "@/components/ui/Input";
import { Datetime } from "@/components/ui/Datetime";
import { ArrowDown } from "@/components/icons/ArrowDown";
import { firebaseConfig } from "@/lib/firebase/firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type InputEventType = EventInfoType;

type postData = {
  finished_at: string;
  image_url: string;
  message: string;
  name: string;
  owner_id: string;
  started_at: string;
};

const demoIcon = "https://avatars.githubusercontent.com/u/88587703?s=48&v=4";

const defaultEvent: EventInfoType = {
  name: "",
  startDate: "",
  endDate: "",
  message: "",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const maxLength = 1000;

export const OwnerPage: React.FC = ({}) => {
  const [userIcon, setUserIcon] = useState<string>(demoIcon);
  const [inputEvent, setInputEvent] = useState<InputEventType>(defaultEvent);
  const [event_id, setEvent_id] = useState<string>("");

  const [checked, setChecked] = useState(false);
  const [count, setCount] = useState(maxLength);

  const router = useRouter();

  useEffect(() => {
    if (event_id !== "") {
      router.push(`/qr?evet_id=${event_id}`);
    }
  }, [event_id]);

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
    postEvent();
  };

  const postEvent = async () => {
    if (inputEvent.name === "") {
      alert("イベント名を入力してください");
      return;
    }
    if (inputEvent.startDate === "") {
      alert("開始日時を入力してください");
      return;
    }
    if (inputEvent.endDate === "") {
      alert("終了日時を入力してください");
      return;
    }

    const token = await auth.currentUser?.getIdToken();
    const tokenValue = await token;
    if (auth.currentUser) {
      const postData: postData = {
        finished_at: inputEvent.endDate,
        image_url: "",
        message: inputEvent.message,
        name: inputEvent.name,
        owner_id: auth.currentUser.uid,
        started_at: inputEvent.startDate,
      };
      if (tokenValue) {
        post(postData, tokenValue);
      } else {
        alert("Token value is undefined");
        return;
      }
    } else {
      alert("ログインしてください");
      return;
    }
  };

  const post = async (postData: postData, token: string) => {
    try {
      const response = await fetch(
        "https://server-u7kyixk36q-an.a.run.app/events",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          method: "POST",
          body: JSON.stringify(postData),
        }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      //event_id:stringを取得
      const jsonData = await response.json();
      setEvent_id(jsonData.event_id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="px-6 font-bold">
      <header className="relative flex pt-12 pb-7">
        <TecherME_Logo className="absolute top-[6px] left-[0.5vw]" />
        <Sticker
          src={userIcon}
          alt="userIcon"
          size="sm"
          className="absolute top-[6px] right-4"
        />
        <Link href={"/qrScan"}>
          <ArrowBack />
        </Link>
        <p className="mx-auto">新規イベントタグの作成</p>
      </header>

      <main>
        <div className="pb-6">
          <p className="text-[8px] pb-2">● イベントタグ名</p>
          <Input
            name="name"
            value={inputEvent.name}
            onChange={handleChangeInputEvent}
          />
        </div>

        <div className="pb-6">
          <p className="text-[8px] pb-2">● イベント期間</p>
          <Datetime
            label="開始日時"
            name="startDate"
            value={inputEvent.startDate}
            onChange={handleChangeInputEvent}
          />
          <p className="flex justify-center py-2">
            <ArrowDown />
          </p>
          <Datetime
            label="終了日時"
            name="endDate"
            value={inputEvent.endDate}
            onChange={handleChangeInputEvent}
          />
        </div>

        <div className="pb-10">
          <Checkbox
            className="pb-3"
            handleClick={handleIsCreateTL}
            label="イベント広場の発行"
            checked={checked}
          />
          <p className="text-[10px]">
            ＊イベント広場とは、イベント参加者が匿名で投稿することのできるタイムラインです。イベントの開催期間中にのみ表示されます。（イベント期間が終了データは全て消去されます。）
          </p>
        </div>

        <div className="pb-7">
          <p className="pb-3 text-[8px]">
            ● 主催者からのメッセージ(イベント参加者に表示されます。)
          </p>
          <Textarea
            maxStringLength={1000}
            name="message"
            value={inputEvent.message}
            onChange={handleChangeInputMessage}
          />
        </div>

        <div className="flex justify-center">
          <Button className="py-1 px-10" onClick={handleCreateQR}>
            QRコード発行
          </Button>
        </div>
      </main>
    </div>
  );
};
