import Image from "next/image";

type Props = {
  handleName: string;
  organization?: string;
  events?: string[];
  github?: string;
  twitter?: string;
  discord?: string;
  website?: string[];
};

export const Card: React.FC<Props> = ({
  handleName,
  organization,
  events,
  github,
  twitter,
  discord,
  website,
}) => {
  return (
    <>
      <div className="p-4 w-[308px] bg-beige rounded-[4px] drop-shadow-[0_4px_4px_rgba(75,75,75,0.25)]">
        <div className="flex justify-between items-center mx-[10px] my-[12px]">
          <div className="inline-flex flex-col justify-start">
            <div className=" font-bold text-[16px] py-[4px]">{handleName}</div>
            <div className=" text-[8px]">{organization}</div>
          </div>
        </div>
        <div>
          {github ? (
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
              <a href={github} className="pl-[20px] text-[12px]">
                {github}
              </a>
            </div>
          ) : null}
          {twitter ? (
            <div
              className="flex
            items-center p-2
            "
            >
              <div className="ml-1">
                <Image
                  src="/logo-black.png"
                  alt="x_icon"
                  width="24"
                  height="24"
                />
              </div>

              <a href={twitter} className="pl-[20px] text-[12px]">
                {twitter}
              </a>
            </div>
          ) : null}
          {discord ? (
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

              <a href={discord} className="pl-[20px] text-[12px]">
                {discord}
              </a>
            </div>
          ) : null}
          {/* {website?.map((site) => (
            <div
              className="flex
            items-center
            "
            >
              <LinkIcon />
              <a href={site} className="pl-[20px] text-[12px]">
                {site}
              </a>
            </div>
          ))} */}
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
