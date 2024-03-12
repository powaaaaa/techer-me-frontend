import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <>
      <button className={styles.button} {...props}>
        {props.children}
      </button>
    </>
  );
};
