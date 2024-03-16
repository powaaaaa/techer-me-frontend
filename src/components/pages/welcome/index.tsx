// Welcome.js

import { Button } from "@/components/ui/Button";
import { TecherME_Logo } from "@/components/ui/TecherME_Logo";
import Image from "next/image";
import { useWelcomePage } from "./hooks";

export const WelcomePage = () => {
  const { handleLoginByGitHub, handleLoinByEmail } = useWelcomePage();

  return (
    <div className="h-screen flex flex-col justify-center items-center overflow-hidden">
      <div
        className="relative w-full h-full"
        style={{
          backgroundImage: 'url("/smartphone_Background.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="-rotate-6 text-nowrap text-center text-[12vw] sm:text-xxs md:text-middle, lg:text-big shadow-2xl mt-14">
          <TecherME_Logo />
        </div>

        <div className="relative p-6">
          <div className="relative justify-center items-center">
            <Image
              src={"/PC_icon.png"}
              alt={"PC_model"}
              width={240}
              height={240}
              className="absolute top-0 @screen pc:w-90 @screen pc:ml-[35vw] "
            />
            <Image
              src={"/smartphone_picture.png"}
              alt={"smartphone"}
              width={120}
              height={120}
              className="absolute top-40 left-[180px] @screen pc:w-34 @screen pc:ml-[38vw]"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 mt-[400px]">
          <Button
            className="py-2 px-4 text-xl flex gap-4 items-center"
            onClick={handleLoginByGitHub}
          >
            <Image
              src={"/github-mark-white.png"}
              alt={"github_icon"}
              width={24}
              height={24}
            />
            GitHub認証
          </Button>

          <Button
            className="py-1 px-10 text-xl "
            color="secondary"
            variant="outlined"
            onClick={handleLoinByEmail}
          >
            e-mail認証
          </Button>
        </div>
      </div>
    </div>
  );
};
