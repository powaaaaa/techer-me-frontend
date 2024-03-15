import { MouseEvent } from "react";
import { Techer, TecherType } from "@/components/ui/Techer";

type Props = {
  techers: TecherType[];
  handleShowPreview: (
    e: MouseEvent<HTMLButtonElement>,
    techer: TecherType
  ) => void;
};

export const StickerList: React.FC<Props> = ({
  techers,
  handleShowPreview,
}) => {
  const handleClick =
    (techer: TecherType) => (e: MouseEvent<HTMLButtonElement>) => {
      handleShowPreview(e, techer);
    };

  return (
    <div>
      {techers.map((techer, i) => (
        <div key={i}>
          <Techer
            src={techer.image}
            techerName={techer.name}
            times={techer.times}
            onClick={handleClick(techer)}
          />
          {i < techers.length - 1 && (
            <div className="h-[0.4px] my-2 bg-grey"></div>
          )}
        </div>
      ))}
    </div>
  );
};
