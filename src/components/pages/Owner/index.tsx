import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Sticker } from "@/components/ui/Sticker";
import { TecherME_Logo } from "@/components/ui/TecherME_Logo";
import { Textarea } from "@/components/ui/Textarea";
import { ArrowBack } from "@/components/icons/ArrowBack";
import { useOwnerPage } from "./hooks";
import { Input } from "@/components/ui/Input";
import { Datetime } from "@/components/ui/Datetime";
import { ArrowDown } from "@/components/icons/ArrowDown";

export const OwnerPage: React.FC = ({}) => {
  const {
    userIcon,
    inputEvent,
    checked,
    handleBackPage,
    handleChangeInputEvent,
    handleIsCreateTL,
    handleCreateQR,
    handleChangeInputMessage,
  } = useOwnerPage({ maxLength: 1000 });

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
        <button onClick={handleBackPage}>
          <ArrowBack />
        </button>
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
