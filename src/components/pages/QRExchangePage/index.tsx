import { Button } from "@/components/ui/Button";
import { QRcode } from "@/components/ui/QRcode";
import { firebaseConfig } from "@/lib/firebase/firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Sticker } from "@/components/ui/Sticker";
import { CameraScan } from "@/components/ui/CameraScan";
import { TecherME_Logo } from "@/components/ui/TecherME_Logo";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const QRExchangePage: React.FC = ({}) => {
  const [qrCode, setQrCode] = useState<string>("");

  const param = useSearchParams();
  const event_id = param.get("event_id");

  const router = useRouter();

  useEffect(() => {
    const postData = async () => {
      if (qrCode !== "") {
        console.log("qrCode", qrCode);
        const token = await auth.currentUser?.getIdToken();
        const tokenValue = await token;
        if (tokenValue) {
          try {
            const myId = auth.currentUser?.uid;
            // if (!myId) {
            //   return;
            // }
            const response = await fetch(
              "https://server-u7kyixk36q-an.a.run.app/exchanges",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer${token}`,
                },
                body: JSON.stringify({
                  event_id: event_id,
                  user_id_1: myId,
                  user_id_2: qrCode,
                }),
              }
            );
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
            }
            router.push(`/top?event_id=${event_id}`);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
      }
    };
    postData();
  }, [qrCode]);

  useEffect(() => {});

  return (
    <>
      <div className="relative flex p-6 gap-[10vw]">
        <TecherME_Logo className="absolute top-[6px] left-[0.5vw]" />
        <p className="text-white">ステッカー交換</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <CameraScan qrCode={qrCode} setQrCode={setQrCode} />
        {auth.currentUser ? <QRcode url={auth.currentUser.uid} /> : null}
        <Sticker
          src={auth.currentUser?.photoURL || "/userIcon.png"}
          alt="userIcon"
          size="lg"
        />

        <Link href={"/editProfile"}>
          <Button
            className="mb-8 px-4 py-1"
            color="secondary"
            variant="outlined"
          >
            Myプロフィールの編集
          </Button>
        </Link>
      </div>
    </>
  );
};
