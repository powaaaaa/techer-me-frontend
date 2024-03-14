import { Button } from "@/components/Button";
import { PostType } from "@/components/Post";
import { PostInput } from "@/components/PostInput";
import { PostList } from "@/components/PostList";
import { ArrowBack } from "@/components/icons/ArrowBack";

type Props = {
  tlTitle: string;
  posts: PostType[];
};

export const TL: React.FC<Props> = ({ tlTitle, posts }) => {
  return (
    <>
      <header className="flex justify-between pb-8">
        <button>
          <ArrowBack />
        </button>
        <p className="font-bold">{tlTitle}</p>
        <Button
          className="py-px px-2 text-[10px]"
          color="secondary"
          variant="outlined"
        >
          退出する
        </Button>
      </header>

      <main className="px-6">
        <PostList posts={posts} handleReply={() => {}} />
      </main>

      <footer className="fixed bottom-0 w-full">
        <PostInput onFileInputChange={() => {}} />
      </footer>
    </>
  );
};
