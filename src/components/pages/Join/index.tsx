import { Button } from "@/components/Button";
import { Sticker } from "@/components/Sticker";
import { TecherME_Logo } from "@/components/TecherME_Logo";
import { useJoinPage } from "./hooks";

export const JoinPage: React.FC = ({}) => {
  const { userIcon, event, handleJoinEvent } = useJoinPage();

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
            <p className="pl-4">{event.name}</p>
          </div>

          <div className="pb-8">
            <p className="text-[8px] pb-1">● 開催期間</p>
            <p className="pl-4">
              {event.startDate} ~ {event.endDate}
            </p>
          </div>

          <div className="pb-8">
            <p className="text-[8px] pb-2">● 主催者からのメッセージ</p>
            <p className="text-[10px] break-words">{event.message}</p>
          </div>

          <div>
            <p className="text-[8px] pb-4">● イベント広場を発行しています</p>
            <p className="text-[10px]">
              ＊イベント広場とは、イベント参加者が匿名で投稿することのできるタイムラインです。イベントの開催期間中にのみ表示されます。（イベント期間が終了データは全て消去されます。）
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            className="py-0.5 px-8"
            color="transparent"
            variant="outlined"
            onClick={handleJoinEvent}
          >
            このイベントに参加します
          </Button>
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
