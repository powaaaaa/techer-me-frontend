"use client";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { PostInput } from "@/components/ui/PostInput";
import { PostList } from "@/components/ui/PostList";
import { ArrowBack } from "@/components/icons/ArrowBack";
import { useTLPage } from "./hooks";
import { PostReplyBox } from "@/components/ui/PostReplyBox";
import { getDatabase, onValue, ref } from "firebase/database";
import { PostType } from "@/components/ui/Post";
import { Modal } from "@/components/ui/Modal";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const TLPage: React.FC = () => {
  // const [message, setMessage] = useState<PostType[]>();

  const {
    tlTitle,
    count,
    showModal,
    setShowModal,
    posts,
    inputPost,
    isReplying,
    repliedPost,
    handleBackPage,
    handleReply,
    handlePostChange,
    handlePostSend,
    Postfetch,
  } = useTLPage({ countLimit: 500 });

  const param = useSearchParams();
  const search = param.get("event_id");

  //firebaseのリアルタイムデータベースのmessageの追加に反応して更新
  useEffect(() => {
    const db = getDatabase();
    const messageRef = ref(db, "message/");
    console.log("messageRef", messageRef);
    onValue(messageRef, (snapshot) => {
      Postfetch();
    });
  }, []);

  return (
    <div>
      <header className="flex justify-between pt-6 px-6 pb-8">
        <Link href={`/top?event_id=${search}`}>
          <ArrowBack />
        </Link>
        <p className="font-bold">{tlTitle}</p>

        <Modal
          className="py-px px-2 text-[10px]"
          label="退出する"
          showModal={showModal}
          setShowModal={setShowModal}
        >
          <p className="p-4">モーダルの中身</p>

          <div className="flex justify-center border-t-[0.4px] border-black">
            <Button
              className="py-[10px]"
              color="transparent"
              onClick={() => setShowModal(false)}
            >
              キャンセル
            </Button>
            <div className="w-[0.4px] bg-black mx-5"></div>
            <Link className="py-[2px]" href={"/top"}>
              <Button className="py-2" color="transparent">
                退出する
              </Button>
            </Link>
          </div>
        </Modal>
      </header>

      <main className="px-6">
        <PostList posts={posts ? posts : []} handleReply={handleReply} />
      </main>

      <footer className="fixed bottom-0 w-full">
        {isReplying && <PostReplyBox replyContent={repliedPost} />}
        <PostInput
          value={inputPost}
          count={count}
          countLimit={500}
          handlePostSend={handlePostSend}
          onFileInputChange={() => {}}
          handlePostChange={handlePostChange}
        />
      </footer>
    </div>
  );
};
