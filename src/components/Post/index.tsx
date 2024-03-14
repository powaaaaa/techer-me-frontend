import { ArrowUndo } from "@/components/icons/ArrowUndo";
import { ComponentPropsWithoutRef } from "react";

export type PostType = {
  id: string;
  date: string;
  time: string;
  content: string;
};

type Props = {
  post: PostType;
} & ComponentPropsWithoutRef<"button">;

export const Post: React.FC<Props> = ({ post, ...props }) => {
  return (
    <div className="relative flex min-w-56 font-bold">
      <p className="break-words pr-7">
        {post.date} {post.time}
      </p>

      <p className="max-w-[186px] break-words">{post.content}</p>

      <button {...props}>
        <ArrowUndo className="absolute right-0 top-0" />
      </button>
    </div>
  );
};
