import { Button } from "@/components/Button";
import { PostInput } from "@/components/PostInput";
import { PostList } from "@/components/PostList";
import { ArrowBack } from "@/components/icons/ArrowBack";
import { useTLPage } from "./hooks";
import { PostReplyBox } from "@/components/PostReplyBox";
import { count } from "console";

export const TLPage: React.FC = () => {
  const {
    tlTitle,
    count,
    posts,
    inputPost,
    isReplying,
    repliedPost,
    handleBackPage,
    handleTlExit,
    handleReply,
    handlePostChange,
    handlePostSend,
  } = useTLPage({ countLimit: 500 });

  return (
    <div>
      <header className="flex justify-between pt-6 px-6 pb-8">
        <button onClick={handleBackPage}>
          <ArrowBack />
        </button>
        <p className="font-bold">{tlTitle}</p>
        <Button
          className="py-px px-2 text-[10px]"
          color="secondary"
          variant="outlined"
          onClick={handleTlExit}
        >
          退出する
        </Button>
      </header>

      <main className="px-6">
        <PostList posts={posts} handleReply={handleReply} />
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
