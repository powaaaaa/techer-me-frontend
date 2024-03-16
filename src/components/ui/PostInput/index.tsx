import { useRef, useState } from "react";
import { ImageIcon } from "@/components/icons/ImageIcon";
import { SendIcon } from "../../icons/SendIcon";
import { PostType } from "../Post";

type Props = {
  countLimit: number;
  count: number;
  value: PostType;
  handlePostSend: (e: React.FormEvent<HTMLFormElement>) => void;
  onFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePostChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PostInput: React.FC<Props> = ({
  countLimit,
  count,
  value,
  handlePostSend,
  onFileInputChange,
  handlePostChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileInputClick = () => {
    console.log(inputRef.current);
    inputRef.current?.click();
  };

  return (
    <form
      className="flex items-center justify-between py-1 px-3.5 w-full bg-[#D6D9DF]"
      onSubmit={handlePostSend}
    >
      <button className="pr-4" onClick={handleFileInputClick}>
        <ImageIcon />
      </button>
      <input
        hidden
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onFileInputChange}
      />

      <div className="flex w-full">
        <div className="flex w-full">
          <input
            name="content"
            type="text"
            maxLength={countLimit}
            className="max-w-60	w-full px-2 bg-grey border border-black-lighter rounded-2xl"
            value={value.content}
            onChange={handlePostChange}
          />
          <p className="flex items-center pl-2 font-bold text-[#777777] text-xs">
            {count}
          </p>
        </div>

        <button className="flex items-center justify-center pl-5">
          <SendIcon />
        </button>
      </div>
    </form>
  );
};
