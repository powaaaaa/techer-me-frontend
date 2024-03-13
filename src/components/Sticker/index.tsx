import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import { Component } from "react";

type Props = {
  src: string;
  size?: "sm" | "md" | "lg";
} & ImageProps;

export const Sticker: React.FC<Props> = ({
  src,
  size = "lg",
  className,
  ...props
}) => {
  return (
    <Image
      src={src}
      width={size === "sm" ? 32 : size === "md" ? 80 : 240}
      height={size === "sm" ? 32 : size === "md" ? 80 : 240}
      className={clsx("border-2 border-white rounded-full", className)}
      {...props}
    />
  );
};
