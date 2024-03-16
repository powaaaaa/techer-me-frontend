import { Button } from "@/components/Button";
import { QRcode } from "@/components/QRcode";
import { TecherME_Logo } from "@/components/TecherME_Logo";
import { useQRPage } from "./hooks";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const QRPage: React.FC = ({}) => {
  const [qrid, setQrid] = useState<string>("");
  const { PDFRef, eventName, eventQRCode, handleGoOwner } = useQRPage();

  const param = useSearchParams();
  const event_id = param.get("event_id");

  useEffect(() => {
    if (event_id) {
      setQrid(event_id);
    }
  }, [event_id]);

  return (
    <div ref={PDFRef} className="px-6 font-bold">
      <header className="relative flex pt-16 pb-8">
        <TecherME_Logo className="absolute top-[6px] left-[0.5vw]" />
        <p className="mx-auto text-xs">イベントを作成しました！</p>
      </header>

      <main className="relative flex flex-col">
        <p className="mx-auto pb-8 text-2xl">{eventName}</p>
        <div>{qrid ? <QRcode url={qrid} /> : <p>QRコードがありません</p>}</div>

        <Button
          color="secondary"
          variant="outlined"
          className="py-1 px-10 mx-auto"
          onClick={() => window.print()}
        >
          PDF印刷
        </Button>

        <p className="pt-16 mx-auto text-[8px]">
          ● このQRコードをイベント開催時に参加者に読み取ってもらってください
        </p>

        <div className="fixed bottom-4 right-5 ">
          <Button
            color="secondary"
            variant="outlined"
            className="py-1 px-10 mx-auto"
            onClick={handleGoOwner}
          >
            管理者画面へ
          </Button>
        </div>
      </main>
    </div>
  );
};
