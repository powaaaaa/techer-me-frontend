import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { TecherME_Logo } from "@/components/ui/TecherME_Logo";
import { Textarea } from "@/components/ui/Textarea";
import { Twitter } from "@/components/icons/twitterLogo";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export const EditProfilePage: React.FC<Props> = ({}) => {
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
        <Card handleName={""} />
      </div>
      <div className="py-2 text-[8px]">
        <p>●プロフィール編集</p>
      </div>

      <p className="text-[10px]">表示名：</p>

      <Input name="name" value={""} />

      <p className="py-2 text-[8px]">所属名:</p>
      <Input name="organaize" value={""} />
      <Image
        src={"/githun-mark-black.png"}
        alt={"github"}
        width="32"
        height="32"
      />
      <Input name="github" value={"url"} />

      <p className="text-[32px]">X</p>
      <Input name="url" value={""} />
      <Image
        src={"/discord-mark-black.png"}
        alt={"DiscordLogo"}
        width="32"
        height="32"
      />
      <Input name="discord-url" value={""} />
      <p className="py-2 text-[8px]">● メッセージ</p>
      <Textarea maxStringLength={200} />
      <div className="flex justify-center items-center ">
        <Button className="py-0.5 px-2 text-[10px] ">編集を終了する</Button>
      </div>
    </div>
  );
};
