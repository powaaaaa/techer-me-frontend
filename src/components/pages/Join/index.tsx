import { Button } from "@/components/Button";
import { Sticker } from "@/components/Sticker";
import { TecherME_Logo } from "@/components/TecherME_Logo";

type Props = {
  userIcon: string;
  eventName: string;
  startDate: string;
  endDate: string;
  eventMessage: string;
};

export const Join: React.FC<Props> = ({
  userIcon,
  eventName,
  startDate,
  endDate,
  eventMessage,
}) => {
  return (
    <div className="w-full font-bold">
      <header className="flex justify-between pb-4">
        <p>イベント登録ページ</p>
        <Sticker src={userIcon} alt="userIcon" size="sm" />
      </header>

      <main>
        <div className="pb-12">
          <div>
            <p className="text-[8px] pb-1">・ イベント名</p>
            <p>{eventName}</p>
          </div>

          <div>
            <p className="text-[8px] pb-1">・ 開催期間</p>
            <p>
              {startDate} ~ {endDate}
            </p>
          </div>

          <div>
            <p className="text-[8px] pb-2">・ 主催者からのメッセージ</p>
            <p className="break-words">{eventMessage}</p>
          </div>

          <div>
            <p className="text-[8px] pb-4">・ イベント広場を発行しています</p>
            <p>
              ＊イベント広場とは、イベント参加者が匿名で投稿することのできるタイムラインです。イベントの開催期間中にのみ表示されます。（イベント期間が終了データは全て消去されます。）
            </p>
          </div>
        </div>

        <Button className="py-0.5 px-8" color="transparent" variant="outlined">
          このイベントに参加します
        </Button>

        <p className="pt-6">
          この
          <span>
            <TecherME_Logo />
          </span>
          ではイベント参加者のステッカーを集めることができます。集めたステッカーはPCで閲覧できます。
        </p>
      </main>
    </div>
  );
};
