import { Card } from "../../ui/Card";
import { Sticker } from "../../ui/Sticker";
import { TecherME_Logo } from "../../ui/TecherME_Logo";
import { ArrowBack } from "../../icons/ArrowBack";
import Link from "next/link";
import { useStickerPreviewPage } from "./hooks";
import { defaultProfile } from "../EditProfile";

export const StickerPreviewPage: React.FC = ({}) => {
  const { userIcon } = useStickerPreviewPage();

  return (
    <main className="h-lvh px-6">
      <div className="py-4 px-7">
        <TecherME_Logo />
      </div>
      <Link className="px-7" href={"/top"}>
        <ArrowBack />
      </Link>
      <div className="px-7 py-3">
        <div className="font-RampartOne text-[24px]">ステッカー</div>
      </div>

      <div className="gap-y-16 flex flex-col justify-center items-center">
        <Sticker
          src={"https://avatars.githubusercontent.com/u/88587703?s=48&v=4"}
          alt={"userIcon"}
        />
        <Card profile={defaultProfile} />
      </div>
    </main>
  );
};
