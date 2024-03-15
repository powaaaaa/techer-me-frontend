import { Button } from "@/components/ui/Button";
import { QRcode } from "@/components/ui/QRcode";
import { TecherME_Logo } from "@/components/ui/TecherME_Logo";
import { useQRPage } from "./hooks";

export const QRPage: React.FC = ({}) => {
  const { PDFRef, eventName, eventQRCode, handleGoOwner } = useQRPage();

  return (
    <div ref={PDFRef} className="px-6 font-bold">
      <header className="relative flex pt-16 pb-8">
        <TecherME_Logo className="absolute top-[6px] left-[0.5vw]" />
        <p className="mx-auto text-xs">イベントを作成しました！</p>
      </header>

      <main className="relative flex flex-col">
        <p className="mx-auto pb-8 text-2xl">{eventName}</p>
        <div>
          <QRcode className="pb-16 mx-auto" url={eventQRCode} />
        </div>

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
