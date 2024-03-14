import { Techer } from "@/components/Techer";

export type TecherType = {
  image: string;
  name: string;
  times: number;
};

type Props = {
  techers: TecherType[];
};

export const StickerList: React.FC<Props> = ({ techers }) => {
  return (
    <div>
      {techers.map((techer, i) => (
        <div key={i}>
          <Techer
            src={techer.image}
            techerName={techer.name}
            times={techer.times}
          />
          {i < techers.length - 1 && (
            <div className="h-[0.4px] my-2 bg-grey"></div>
          )}
        </div>
      ))}
    </div>
  );
};
