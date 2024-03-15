"use client";
import { Sticker } from "@/components/ui/Sticker";
import { StickerList } from "@/components/ui/StickerList";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { TecherME_Logo } from "@/components/ui/TecherME_Logo";
import { useTopPage } from "./hooks";

export const TopPage: React.FC = ({}) => {
  const { techers, userIcon, handleShowPreview } = useTopPage();

  return (
    <div className="px-6 font-bold">
      <header className="flex pt-14 pb-6">
        <TecherME_Logo className="absolute top-[6px] left-[0.5vw]" />

        <Link className="mx-auto" href={"/qrScan"}>
          <Button color="secondary" variant="outlined" className="py-0.5 px-8">
            イベント登録
          </Button>
        </Link>
      </header>

      <main className="flex flex-col">
        <p className="text-[8px] pb-5">保有ステッカー</p>
        <div className="mx-auto pb-7 h-[60vh] min-w-[500px] overflow-auto">
          <StickerList
            techers={techers}
            handleShowPreview={handleShowPreview}
          />
        </div>

        <Link className="flex flex-col items-center my-5" href={"/qrExchange"}>
          <Sticker src={userIcon} alt="test" />
        </Link>
      </main>
    </div>
  );
};
