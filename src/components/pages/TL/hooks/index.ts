import { PostType } from "@/components/Post";
import { useState } from "react";

type UseTLPage = {
  tlTitle: string;
  count: number;
  posts: PostType[];
  inputPost: PostType;
  isReplying: boolean;
  repliedPost: string;
  handlePostSend: (e: React.FormEvent<HTMLFormElement>) => void;
  handleBackPage: () => void;
  handleTlExit: () => void;
  handlePostChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReply: (e: React.MouseEvent<HTMLButtonElement>, post: PostType) => void;
};

const demo: PostType[] = [
  {
    id: "1",
    date: "3/12",
    time: "14:55",
    content: "Hellooooooooooooooooo, worrrrrrrrrrrrrrld!",
  },
  {
    id: "g",
    date: "3/12",
    time: "14:55",
    content: "Hello, world!",
  },
  {
    id: "h",
    date: "3/12",
    time: "14:55",
    content: "Hello, world!",
  },
];
const defaultPost: PostType = {
  id: "",
  date: "",
  time: "",
  content: "",
};

export const useTLPage = ({
  countLimit,
}: {
  countLimit: number;
}): UseTLPage => {
  const [count, setCount] = useState(countLimit);
  const [tlTitle, setTlTitle] = useState<string>("Hack U 2024 Osaka");
  const [posts, setPosts] = useState<PostType[]>(demo);
  const [inputPost, setInputPost] = useState<PostType>(defaultPost);
  const [isReplying, setIsReplying] = useState<boolean>(false);
  const [repliedPost, setRepliedPost] = useState<string>("Hello, world!");

  const handleBackPage = () => {
    console.log("back");
  };

  const handleTlExit = () => {
    console.log("exit");
  };

  const handleReply = (
    e: React.MouseEvent<HTMLButtonElement>,
    post: PostType
  ) => {
    e.preventDefault();
    setIsReplying(true);

    console.log("reply", post);
  };

  const handlePostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(countLimit - e.target.value.length);
    setInputPost({
      ...inputPost,
      [e.target.name]: e.target.value,
    });
  };

  const handlePostSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isReplying) {
      setIsReplying(false);
    }

    console.log("send", inputPost);
    setInputPost(defaultPost);
    setCount(countLimit);
  };

  return {
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
  };
};
