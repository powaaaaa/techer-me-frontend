import { IonIcon } from "@ionic/react";
import {
  logoGithub,
  logoLinkedin,
  logoTwitter,
  linkOutline,
} from "ionicons/icons";

type Props = {
  handleName: string;
  organization?: string;
  events?: string[];
  github?: string;
  twitter?: string;
  linkedin?: string;
  website?: string[];
};

export const Card: React.FC<Props> = ({
  handleName,
  organization,
  events,
  github,
  twitter,
  linkedin,
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
          <ul className="list-disc">
            {events?.map((event) => (
              <li className="text-[10px]">{event}</li>
            ))}
          </ul>
        </div>
        <div>
          {github ? (
            <div
              className="flex 
            items-center
            "
            >
              <IonIcon
                icon={logoGithub}
                className="h-[32px] w-[32px]"
              ></IonIcon>
              <a href={github} className="pl-[20px] text-[12px]">
                {github}
              </a>
            </div>
          ) : null}
          {twitter ? (
            <div
              className="flex 
            items-center
            "
            >
              <IonIcon
                icon={logoTwitter}
                className="h-[32px] w-[32px]"
              ></IonIcon>
              <a href={twitter} className="pl-[20px] text-[12px]">
                {twitter}
              </a>
            </div>
          ) : null}
          {linkedin ? (
            <div
              className="flex 
            items-center
            "
            >
              <IonIcon
                icon={logoLinkedin}
                className="h-[32px] w-[32px]"
              ></IonIcon>
              <a href={linkedin} className="pl-[20px] text-[12px]">
                {linkedin}
              </a>
            </div>
          ) : null}
          {website?.map((site) => (
            <div
              className="flex 
            items-center
            "
            >
              <IonIcon
                icon={linkOutline}
                className="h-[32px] w-[32px]"
              ></IonIcon>
              <a href={site} className="pl-[20px] text-[12px]">
                {site}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
