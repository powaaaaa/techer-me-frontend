import { useRef, useState } from "react";
import { ImageIcon } from "@/components/icons/ImageIcon";
import { SendIcon } from "../icons/SendIcon";

type Props = {
  onFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PostInput: React.FC<Props> = ({ onFileInputChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(500);

  const strCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(500 - e.target.value.length);
  };

  const handleFileInputClick = () => {
    console.log(inputRef.current);
    inputRef.current?.click();
  };

  return (
    <form className="flex items-center justify-between py-1 px-3.5 w-full bg-[#D6D9DF]">
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
            type="text"
            maxLength={1}
            className="max-w-60	w-full px-2 bg-grey border border-black-lighter rounded-2xl"
            onChange={strCount}
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
