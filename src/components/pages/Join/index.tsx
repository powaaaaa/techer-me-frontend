import { Button } from "@/components/ui/Button";
import { Sticker } from "@/components/ui/Sticker";
import { TecherME_Logo } from "@/components/ui/TecherME_Logo";
import { useJoinPage } from "./hooks";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { firebaseConfig } from "@/lib/firebase/firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { eventData } from "@/@types/pages";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const JoinPage: React.FC = ({}) => {
  const router = useRouter();
  const { userIcon, event } = useJoinPage();
  const [eventData, setEventData] = useState<eventData>();

  const param = useSearchParams();
  const event_id = param.get("event_id");

  useEffect(() => {
    if (event_id) {
      const fetchEvent = async (event_id: string) => {
        const token = await auth.currentUser?.getIdToken();
        const tokenValue = await token;
        if (tokenValue) {
          try {
            const response = await fetch(
              `https://server-u7kyixk36q-an.a.run.app/events/${event_id}`,
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
            const jsonData: eventData = await response.json();
            setEventData(jsonData);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
      };
      fetchEvent(event_id);
    }
  }, [event_id]);

  const handleJoinEvent = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    postEvent();
    console.log("join");
    router.push(`/top?event_id=${event_id}`);
  };

  const postEvent = async () => {
    const event_id = param.get("event_id");
    const token = await auth.currentUser?.getIdToken();
    const tokenValue = await token;
    if (tokenValue) {
      try {
        const response = await fetch(
          `https://server-u7kyixk36q-an.a.run.app/events/join/${event_id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            method: "POST",
          }
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const jsonData: eventData = await response.json();
        setEventData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <div className="relative w-full font-bold px-6">
      <header className="flex pt-14 pb-4">
        <p className="mx-auto">イベント登録ページ</p>
        <Sticker
          src={userIcon}
          alt="userIcon"
          size="sm"
          className="absolute top-[6px] right-4"
        />
      </header>

      <main>
        <div className="pb-12">
          <div className="pb-6">
            <p className="text-[8px] pb-1">● イベント名</p>
            {eventData ? (
              <p className="pl-4">{eventData.name}</p>
            ) : (
              <p>loading...</p>
            )}
          </div>

          <div className="pb-8">
            <p className="text-[8px] pb-1">● 開催期間</p>
            <div className="pl-4">
              {eventData ? (
                <>
                  {eventData.started_at} 〜 {eventData.finished_at}
                </>
              ) : (
                <p>loading...</p>
              )}
            </div>
          </div>

          <div className="pb-8">
            <p className="text-[8px] pb-2">● 主催者からのメッセージ</p>
            {eventData ? (
              <p className="text-[10px] break-words">{eventData.message}</p>
            ) : (
              <p>loading...</p>
            )}
          </div>

          <div>
            <p className="text-[8px] pb-4">● イベント広場を発行しています</p>
            <p className="text-[10px]">
              ＊イベント広場とは、イベント参加者が匿名で投稿することのできるタイムラインです。イベントの開催期間中にのみ表示されます。（イベント期間が終了データは全て消去されます。）
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          {eventData ? (
            <Button
              className="py-0.5 px-8"
              color="transparent"
              variant="outlined"
              onClick={handleJoinEvent}
            >
              このイベントに参加します
            </Button>
          ) : (
            <p>loading...</p>
          )}
        </div>

        <p className="pt-6 text-[10px]">
          この
          <span>
            {" "}
            <TecherME_Logo />{" "}
          </span>
          ではイベント参加者のステッカーを集めることができます。集めたステッカーはPCで閲覧できます。
        </p>
      </main>
    </div>
  );
};
