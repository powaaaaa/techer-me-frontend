import clsx from "clsx";
import Image, { ImageProps } from "next/image";

type Props = {
  src: string;
  size?: "sm" | "md" | "lg";
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & ImageProps;

export const Sticker: React.FC<Props> = ({
  src,
  size = "lg",
  className,
  handleClick,
  ...props
}) => {
  return (
    <button onClick={handleClick}>
      <Image
        src={src}
        width={size === "sm" ? 32 : size === "md" ? 80 : 240}
        height={size === "sm" ? 32 : size === "md" ? 80 : 240}
        className={clsx("border-2 border-white rounded-full", className)}
        {...props}
      />
    </button>
  );
};
