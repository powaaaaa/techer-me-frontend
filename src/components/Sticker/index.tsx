import Image from "next/image";

type Props = {
  src: string;
  size?: "sm" | "md" | "lg";
};

export const Sticker: React.FC<Props> = ({ src, size = "lg" }) => {
  return (
    <Image
      src={src}
      alt="sticker"
      width={size === "sm" ? 32 : size === "md" ? 80 : 240}
      height={size === "sm" ? 32 : size === "md" ? 80 : 240}
      className="border-2 border-white rounded-full"
    />
  );
};
