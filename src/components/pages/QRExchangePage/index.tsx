import { Button } from "@/components/ui/Button";
import { QRcode } from "@/components/ui/QRcode";
import { Sticker } from "@/components/ui/Sticker";
import { CameraScan } from "@/components/ui/CameraScan";
import { TecherME_Logo } from "@/components/ui/TecherME_Logo";
import Link from "next/link";

export const QRExchangePage: React.FC = ({}) => {
  return (
    <>
      <div className="relative flex p-6 gap-[10vw]">
        <TecherME_Logo className="absolute top-[6px] left-[0.5vw]" />
        <p className="text-white">ステッカー交換</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <CameraScan />
        <QRcode url={"ユーザーのプロフィールのURLを"} />
        <Sticker
          src={"https://avatars.githubusercontent.com/u/111046707?v=4"}
          alt="userIcon"
          size="lg"
        />

        <Link href={"/editProfile"}>
          <Button
            className="mb-8 px-4 py-1"
            color="secondary"
            variant="outlined"
          >
            Myプロフィールの編集
          </Button>
        </Link>
      </div>
    </>
  );
};
