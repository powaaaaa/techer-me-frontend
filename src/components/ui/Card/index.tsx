import Image from "next/image";
import { Twitter } from "@/components/icons/twitterLogo";

type ProfileType = {
  name: string;
  // organaize: string;
  github?: string;
  url?: string;
  discord?: string;
  message?: string;
};

type Props = {
  profile: ProfileType;
  events?: string[];
};

export const Card: React.FC<Props> = ({ profile, events }) => {
  return (
    <>
      <div className="p-4 w-[308px] bg-beige rounded-[4px] drop-shadow-[0_4px_4px_rgba(75,75,75,0.25)]">
        <div className="flex justify-between items-center mx-[10px] my-[12px]">
          <div className="inline-flex flex-col justify-start">
            <div className=" font-bold text-[16px] py-[4px]">
              {profile.name}
            </div>
            {/* <div className=" text-[8px]">{profile.organaize}</div> */}
          </div>
        </div>
        <div>
          {profile.github ? (
            <div
              className="flex
            items-center p-2
            "
            >
              <Image
                src="/github-mark.png"
                alt="github_icon"
                width="32"
                height="32"
              />
              <a href={profile.github} className="pl-[20px] text-[12px]">
                {profile.github}
              </a>
            </div>
          ) : null}
          {profile.url ? (
            <div
              className="flex
            items-center p-2
            "
            >
              <p className="text-[32px]">X</p>

              <a href={profile.url} className="pl-[20px] text-[12px]">
                {profile.url}
              </a>
            </div>
          ) : null}
          {profile.discord ? (
            <div
              className="flex
            items-center p-2
            "
            >
              <Image
                src="/discord-mark-black.png"
                alt="Discord_icon"
                width="32"
                height="32"
              />

              <a href={profile.discord} className="pl-[20px] text-[12px]">
                {profile.discord}
              </a>
            </div>
          ) : null}
        </div>
        <ul className="list-disc">
          {events?.map((event) => (
            <li className="text-[10px]">{event}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
