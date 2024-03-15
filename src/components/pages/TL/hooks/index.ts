import { PostType } from "@/components/Post";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import {
  getDatabase,
  ref,
  push,
  onChildAdded,
  get,
  query,
  orderByChild,
  limitToLast,
  onValue,
  set,
} from "firebase/database";

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
  Postfetch: () => void;
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

  const handlePostSend = async (e: React.FormEvent<HTMLFormElement>) => {
    const auth = getAuth();
    const db = getDatabase();
    e.preventDefault();
    if (isReplying) {
      setIsReplying(false);
    }
    //githubのidを取得
    const userName: any = auth.currentUser?.uid;
    //日時を取得
    const date = new Date();
    //月の取得
    const month = date.getMonth() + 1;
    //日の取得
    const day = date.getDate();
    //時間の取得
    const hour = date.getHours();
    //分の取得
    const minute = date.getMinutes();
    const sendData: PostType = {
      id: userName,
      date: `${month}/${day}`,
      time: `${hour}:${minute}`,
      content: inputPost.content,
    };
    //リアルタイムデータベースに書き込む
    try {
      const dbRef = ref(db, `events/test/messages`);
      await push(dbRef, sendData);
      setInputPost(defaultPost);
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    setCount(countLimit);
  };

  const Postfetch = () => {
    try {
      const db = getDatabase();
      const dbRef = ref(db, `events/test/messages`);
      const q = query(dbRef, orderByChild("date"), limitToLast(10));
      onValue(q, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        if (data) {
          const posts = Object.keys(data).map((key) => {
            return {
              id: key,
              date: data[key].date,
              time: data[key].time,
              content: data[key].content,
            };
          });
          setPosts(posts);
        }
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
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
    Postfetch,
  };
};
