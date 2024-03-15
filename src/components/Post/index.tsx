"use client";
import { ArrowUndo } from "@/components/icons/ArrowUndo";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { getDatabase, ref, query, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useTLPage } from "../pages/TL/hooks";

export type PostType = {
  id: number;
  date: string;
  time: string;
  content: string;
  reply?: number;
  image?: string[];
};

type Props = {
  post: PostType;
} & ComponentPropsWithoutRef<"button">;

export const Post: React.FC<Props> = ({ post, ...props }) => {
  const [replyContent, setReply] = useState<string>();

  useEffect(() => {
    if (post.reply) fetchReply();
  }, [post]);

  async function fetchReply() {
    try {
      const db = getDatabase();
      const auth = getAuth();
      const replyRef = ref(db, `events/test/messages/${post.reply}`);
      const replySnapshot = await get(replyRef);
      if (replySnapshot.exists()) {
        const replyData = replySnapshot.val();
        setReply(replyData.content);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      {replyContent ? (
        <div className="relative flex min-w-56 font-medium text-gray">
          「{replyContent}」に対する返信
        </div>
      ) : null}

      <div className="relative flex min-w-56 font-bold">
        <p className="break-words pr-7">
          {post.date} {post.time}
        </p>
        <p className="max-w-[186px] break-words">{post.content}</p>

        <button {...props}>
          <ArrowUndo className="absolute right-0 top-0" />
        </button>
      </div>
    </>
  );
};
