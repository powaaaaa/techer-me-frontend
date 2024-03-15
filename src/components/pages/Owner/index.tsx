import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Sticker } from "@/components/Sticker";
import { TecherME_Logo } from "@/components/TecherME_Logo";
import { ArrowBack } from "@/components/icons/ArrowBack";

type Props = {};

export const OwnerPage: React.FC<Props> = ({}) => {
  return (
    <>
      <header>
        <TecherME_Logo />
        <Sticker src={""} alt="" />
        <button onClick={handleBackPage}>
          <ArrowBack />
        </button>
        <p>新規イベントタグの作成</p>
      </header>

      <main>
        <div>
          <p>イベントタグ名</p>
        </div>

        <div>
          <p>イベント期間</p>
        </div>

        <div>
          <Checkbox onCheckedChange={handleCreateTL}>
            イベント広場の発行
          </Checkbox>
          <p>
            ＊イベント広場とは、イベント参加者が匿名で投稿することのできるタイムラインです。イベントの開催期間中にのみ表示されます。（イベント期間が終了データは全て消去されます。）
          </p>
        </div>

        <div>
          <p>主催者からのメッセージ(イベント参加者に表示されます。)</p>
        </div>

        <Button>QRコード発行</Button>
      </main>
    </>
  );
};
