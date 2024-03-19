import { TextareaHTMLAttributes } from "react";
import { useState } from "react";
import styles from "./index.module.css";

export const Textarea = ({
  maxStringLength,
  ...props
}: {
  maxStringLength: number;
} & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const [count, setCount] = useState(maxStringLength);

  const strCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(maxStringLength - e.target.value.length);
  };

  return (
    <div className={styles.textbox}>
      <textarea
        className={styles.textarea}
        maxLength={maxStringLength}
        {...props}
      ></textarea>
      <div className={styles.counter}>{count}</div>
    </div>
  );
};
