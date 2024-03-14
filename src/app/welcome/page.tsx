import { Button } from "@/components/Button";
import { TecherME_Logo } from "@/components/TecherME_Logo";
import Image from "next/image";

export default function Welcome() {
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

        <div className="flex justify-center items-center">
          <div>
            <Image
              src={"/PC_icon.png"}
              alt={"PC_model"}
              width={240}
              height={240}
            />
          </div>
          <div className="mt-40">
            <Image
              src={"/smartphone_picture.png"}
              alt={"smartphone"}
              width={160}
              height={160}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 mt-16">
          <Button className="py-2 px-4 text-xl flex gap-4 items-center">
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
          >
            e-mail認証
          </Button>
        </div>
      </div>
    </div>
  );
}
