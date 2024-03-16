import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { TecherME_Logo } from "@/components/ui/TecherME_Logo";
import { Textarea } from "@/components/ui/Textarea";
import { firebaseConfig } from "@/lib/firebase/firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type InputProfile = {
  name: string;
  // organaize: string;
  github: string;
  url: string;
  discord: string;
  message: string;
};

type Event = {
  event_id: string;
  finished_at: string;
  image_url: string;
  message: string;
  name: string;
  owner_id: string;
  started_at: string;
};

type Skills = {
  [key: string]: string;
};

type Urls = {
  [key: string]: string;
};

type getMeType = {
  events: Event[];
  image_url: string;
  // is_organizer: boolean;
  message: string;
  name: string;
  skills: Skills;
  urls: Urls;
  user_id: string;
};

type PostMeType = {
  image_url: string;
  is_organizer: string;
  message: string;
  name: string;
  skills: Skills;
  urls: Urls;
};

export const defaultProfile: InputProfile = {
  name: "",
  // organaize: "",
  github: "",
  url: "",
  discord: "",
  message: "",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const EditProfilePage: React.FC = ({}) => {
  const [inputProfile, setInputProfile] =
    useState<InputProfile>(defaultProfile);
  const [profile, setProfile] = useState<InputProfile>(defaultProfile);

  const handleChangeProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputProfile({ ...inputProfile, [e.target.name]: e.target.value });
  };

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputProfile({ ...inputProfile, [e.target.name]: e.target.value });
  };

  const handleFinishEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setProfile(inputProfile);
    console.log(inputProfile);
  };

  const getData = async (token: string) => {
    try {
      const response = await fetch(
        "https://server-u7kyixk36q-an.a.run.app/me",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const jsonData: getMeType = await response.json();

      const newTechers = {
        profile: {
          name: jsonData.name,
          // organaize: jsonData.is_organizer,
          github: jsonData.urls.github,
          url: jsonData.urls.url,
          discord: jsonData.urls.discord,
          message: jsonData.message,
        },
        events: jsonData.events,
      };
      setProfile(newTechers.profile);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postData = async (token: string) => {
    try {
      const postData: PostMeType = {
        image_url: "",
        is_organizer: "true",
        message: inputProfile.message,
        name: inputProfile.name,
        skills: {
          additionalProp1: "",
          additionalProp2: "",
          additionalProp3: "",
        },
        urls: {
          additionalProp1: inputProfile.github,
          additionalProp2: inputProfile.url,
          additionalProp3: inputProfile.discord,
        },
      };

      const response = await fetch(
        "https://server-u7kyixk36q-an.a.run.app/me",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(postData),
        }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = auth.currentUser?.getIdToken();
      if (token) {
        console.log("token is found");
        const tokenValue = await token;
        await getData(tokenValue);
      } else {
        console.log("token is not found");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const token = auth.currentUser?.getIdToken();
      if (token) {
        console.log("token is found");
        const tokenValue = await token;
        await postData(tokenValue);
      } else {
        console.log("token is not found");
      }
    };

    fetchData();
  }, [profile]);

  return (
    <div className="p-1">
      <div className="flex gap-[38vw] ">
        <TecherME_Logo />
        <Link href={"/top"}>
          <Button
            className="py-1 px-6 text-[8px] "
            color="secondary"
            variant="outlined"
          >
            topへ
          </Button>
        </Link>
      </div>
      <div className="py-5 text-[8px]">
        <p>●プロフィール詳細プレビュー</p>
      </div>
      <div className=" flex justify-center items-center py-1">
        <Card profile={profile} />
      </div>

      <div className="py-2 text-[8px]">
        <p>●プロフィール編集</p>
      </div>

      <p className="text-[10px]">表示名：</p>
      <Input
        name="name"
        value={inputProfile.name}
        onChange={handleChangeProfile}
      />

      {/* <p className="py-2 text-[8px]">所属名:</p>
      <Input
        name="organaize"
        value={inputProfile.organaize}
        onChange={handleChangeProfile}
      /> */}
      <Image
        src={"/githun-mark-black.png"}
        alt={"github"}
        width="32"
        height="32"
      />
      <Input
        name="github"
        value={inputProfile.github}
        onChange={handleChangeProfile}
      />

      <p className="text-[32px]">X</p>
      <Input
        name="url"
        value={inputProfile.url}
        onChange={handleChangeProfile}
      />
      <Image
        src={"/discord-mark-black.png"}
        alt={"DiscordLogo"}
        width="32"
        height="32"
      />
      <Input
        name="discord"
        value={inputProfile.discord}
        onChange={handleChangeProfile}
      />
      <p className="py-2 text-[8px]">● メッセージ</p>
      <Textarea
        maxStringLength={200}
        name="message"
        value={inputProfile.message}
        onChange={handleChangeMessage}
      />
      <div className="flex justify-center items-center ">
        <Button className="py-0.5 px-2 text-[10px]" onClick={handleFinishEdit}>
          編集を終了する
        </Button>
      </div>
    </div>
  );
};
