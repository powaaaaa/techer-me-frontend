import { Sticker } from "@/components/Sticker";
import { cva } from "class-variance-authority";
import clsx from "clsx";

type Props = {
  src: string;
  times?: number;
  techerName: string;
};

const interval = cva("", {
  variants: {
    hasTimes: {
      false: "pr-[52px]",
      true: "pr-7",
    },
  },
  defaultVariants: {
    hasTimes: false,
  },
});

export const Techer: React.FC<Props> = ({ src, times, techerName }) => {
  const timesVariant = times && times > 1 ? true : false;

  return (
    <div className="relative flex items-center">
      <div
        className={clsx(
          interval({ hasTimes: timesVariant }),
          "relative flex items-end"
        )}
      >
        <Sticker src={src} alt="sticker" size="sm" />
        {timesVariant && (
          <div>
            <Sticker
              src={src}
              alt="sticker"
              size="sm"
              className="absolute top-0 left-2 -z-10"
            />
            <p className="ml-2 text-[8px]">
              × <span className="font-bold">{times}</span>
            </p>
          </div>
        )}
      </div>

      <p className="font-bold">{techerName}</p>
    </div>
  );
};
