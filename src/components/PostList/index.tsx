import { MouseEvent } from "react";
import { Post, PostType } from "@/components/Post";

type Props = {
  posts: PostType[];
  handleReply: (e: MouseEvent<HTMLButtonElement>, post: PostType) => void;
};

export const PostList: React.FC<Props> = ({ posts, handleReply }) => {
  const handleClick =
    (post: PostType) => (e: MouseEvent<HTMLButtonElement>) => {
      handleReply(e, post);
    };

  return (
    <div>
      {posts.map((post, i) => (
        <div>
          <Post key={post.id} post={post} onClick={handleClick(post)} />
          {i < posts.length - 1 && (
            <div className="h-[0.4px] my-[10px] bg-grey"></div>
          )}
        </div>
      ))}
    </div>
  );
};
