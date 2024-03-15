import { PostType } from "@/components/Post";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import {
  getDatabase,
  ref,
  push,
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

//NOTE:  このdemoはbackendと繋げられたら消す
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
  //NOTE:  このdemoはbackendと繋げられたら消す
  const [posts, setPosts] = useState<PostType[]>(demo);
  const [inputPost, setInputPost] = useState<PostType>(defaultPost);
  const [isReplying, setIsReplying] = useState<boolean>(false);
  const [repliedPost, setRepliedPost] = useState<string>("Hello, world!");
  const [replyId, setReplyId] = useState<number>(0);

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
    setReplyId(post.id);
    setRepliedPost(post.content);
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
    console.log("send");
    const auth = getAuth();
    const db = getDatabase();
    e.preventDefault();
    if (isReplying) {
      setIsReplying(false);
    }
    //postの長さを取得
    const num = posts.length + 1;
    //日時を取得
    const date = new Date();
    //月の取得
    const month = date.getMonth() + 1;
    //日の取得
    const day = date.getDate();
    //時間の取得ただし一桁の場合は0をつける
    const hournum = date.getHours();
    const hour = hournum < 10 ? `0${hournum}` : hournum;
    //分の取得
    const minutenum = date.getMinutes();
    const minute = minutenum < 10 ? `0${minutenum}` : minutenum;
    if (isReplying === false) {
      const sendData = {
        id: num,
        date: `${month}/${day}`,
        time: `${hour}:${minute}`,
        content: inputPost.content,
      };

      try {
        const dbRef = ref(db, `events/test/messages`);
        await push(dbRef, sendData);
        setInputPost(defaultPost);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      const sendData = {
        id: num,
        date: `${month}/${day}`,
        time: `${hour}:${minute}`,
        content: inputPost.content,
        reply: replyId,
      };
      try {
        const dbRef = ref(db, `events/test/messages`);
        await push(dbRef, sendData);
        setInputPost(defaultPost);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
    //リアルタイムデータベースに書き込む
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
          const posts: PostType[] = Object.keys(data).map((key) => {
            return {
              id: key,
              date: data[key].date,
              time: data[key].time,
              content: data[key].content,
              reply: data[key].reply,
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
