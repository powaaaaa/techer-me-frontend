import { Button } from "@/components/Button";
import { CameraScan } from "@/components/CameraScan";
import { ArrowBack } from "@/components/icons/ArrowBack";

type Props = {};

export const NewEventScanPage: React.FC<Props> = ({}) => {
  return (
    <div className="h-[100%] flex flex-col">
      <div className=" bg-black/80 ">
        <div className="p-4">
          <ArrowBack />
        </div>
        <p className="flex justify-center items-center text-white p-4">
          新規イベントQR読み取り
        </p>
        <div className="p-32">
          <CameraScan />
        </div>
        <div className="p-6 text-right">
          <Button
            className="py-1 px-4 text-[10px] "
            color="secondary"
            variant="outlined"
          >
            主催者用新規イベントタグの作成
          </Button>
        </div>
      </div>
    </div>
  );
};
