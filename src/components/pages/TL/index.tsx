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
      <header className="flex">
        <button>
          <ArrowBack />
        </button>
        <p className="font-bold">{tlTitle}</p>
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
