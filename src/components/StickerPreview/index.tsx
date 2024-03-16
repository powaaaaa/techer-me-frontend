import { Card } from "../Card";
import { Sticker } from "../Sticker";
import { TecherME_Logo } from "../TecherME_Logo";
import { ArrowBack } from "../icons/ArrowBack";

type Props = {};

export const StickerPreview: React.FC<Props> = ({}) => {
  return (
    <div className="h-lvh">
      <div className="py-4 px-7">
        <TecherME_Logo />
      </div>
      <div className="px-7">
        <ArrowBack />
      </div>
      <div className="px-7 py-3">
        <div className="font-RampartOne ">ステッカー</div>
      </div>
      <div className="gap-y-16 flex flex-col justify-center items-center">
        <Sticker src={""} alt={""} />
        <Card handleName={""} />
      </div>
    </div>
  );
};
