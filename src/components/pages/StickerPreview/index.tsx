import { Card } from "../../ui/Card";
import { Sticker } from "../../ui/Sticker";
import { TecherME_Logo } from "../../ui/TecherME_Logo";
import { ArrowBack } from "../../icons/ArrowBack";
import Link from "next/link";
import { useStickerPreviewPage } from "./hooks";

export const StickerPreviewPage: React.FC = ({}) => {
  const { userIcon } = useStickerPreviewPage();

  return (
    <main className="h-lvh">
      <div className="py-4 px-7">
        <TecherME_Logo />
      </div>
      <Link className="px-7" href={"/top"}>
        <ArrowBack />
      </Link>
      <div className="px-7 py-3">
        <div className="font-RampartOne">ステッカー</div>
      </div>

      <div className="gap-y-16 flex flex-col justify-center items-center">
        <Sticker src={userIcon} alt={"userIcon"} />
        <Card handleName={""} />
      </div>
    </main>
  );
};
