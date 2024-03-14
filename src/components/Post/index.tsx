import { ArrowUndo } from "@/components/icons/ArrowUndo";

type Props = {
  date: string;
  time: string;
  content: string;
  handleReply: () => void;
};

export const Post: React.FC<Props> = ({ date, time, content, handleReply }) => {
  return (
    <div className="relative flex min-w-56 font-bold">
      <p className="break-words pr-7">
        {date} {time}
      </p>

      <p className="max-w-[186px] break-words">{content}</p>

      <button onClick={handleReply}>
        <ArrowUndo className="absolute right-0 top-0" />
      </button>
    </div>
  );
};
