import { Button } from "@/components/Button";
import { QRcode } from "@/components/QRcode";
import { Sticker } from "@/components/Sticker";
import {CameraScan} from "@/components/CameraScan"
import { TecherME_Logo } from "@/components/TecherME_Logo";

type Props = {};

export const QRExchangePage: React.FC<Props> = ({}) => {
  return (
    <div className="bg-black/80">
      <div className="flex p-6 gap-[10vw]">
        <TecherME_Logo />
        <p className="text-white">ステッカー交換</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <CameraScan/>
        <QRcode url={"ユーザーのプロフィールのURLを"} />
        <Sticker src={"userIcon"} alt="userIcon" size="lg" />
        
          <Button className="mb-8 px-4 py-1" color="secondary" variant="outlined">
            Myプロフィールの編集
          </Button>
        
      </div>
    </div>
  );
};
