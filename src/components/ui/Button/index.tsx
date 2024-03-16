import { ComponentPropsWithoutRef } from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "transparent";
  variant?: "outlined" | "contained";
} & ComponentPropsWithoutRef<"button">;

const style = cva("rounded font-bold", {
  variants: {
    color: {
      primary: "bg-black text-white",
      secondary: "bg-beige text-black",
      transparent: "bg-transparent text-black",
    },
    variant: {
      outlined: "border-[1px] border-black",
      contained: "",
    },
  },
  defaultVariants: {
    color: "primary",
    variant: "contained",
  },
});

export const Button: React.FC<Props> = ({
  children,
  color,
  variant,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(style({ color: color, variant: variant }), className)}
      {...props}
    >
      {children}
    </button>
  );
};
