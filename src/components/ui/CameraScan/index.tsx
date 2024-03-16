"use client";
import { useEffect, useRef, Dispatch } from "react";
import { firebaseConfig } from "@/lib/firebase/firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import jsQR from "jsqr";

type Props = {
  qrCode: string;
  setQrCode: Dispatch<string>;
};

export const CameraScan: React.FC<Props> = ({ qrCode, setQrCode }) => {
  const videoRef: any = useRef(null);
  const canvasRef: any = useRef(null);
  const canvasContextRef: any = useRef(null);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    canvasContextRef.current = canvasRef.current.getContext("2d");
    const intervalId = setInterval(() => {
      if (videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
        let video = videoRef.current;
        let canvas = canvasRef.current;
        let context = canvasContextRef.current;

        let scaleFactor = Math.max(
          video.videoWidth / window.innerWidth,
          video.videoHeight / window.innerHeight
        );
        let captureWidth = 360 * scaleFactor;
        let captureHeight = 360 * scaleFactor;

        context.drawImage(
          video,
          (video.videoWidth - captureWidth) / 2,
          (video.videoHeight - captureHeight) / 2,
          captureWidth,
          captureHeight,
          0,
          0,
          canvas.width,
          canvas.height
        );

        // Get image data from the canvas
        let imageData = context.getImageData(0, 0, canvas.width, canvas.height);

        // Decode the QR code
        let code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
          console.log("Found QR code", code.data);
          setQrCode(code.data);
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [videoRef]);

  // useEffect(() => {
  //   async function exchangePost() {
  //     if (qrCode !== "") {
  //       try {
  //         const token = await auth.currentUser?.getIdToken();
  //         const tokenValue = await token;
  //         const response = await fetch(
  //           "https://server-u7kyixk36q-an.a.run.app/exchanges",
  //           {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //               Authorization: `Bearer ${tokenValue}`,
  //             },
  //             body: JSON.stringify({
  //               event_id: "1",
  //               user_id_1: auth.currentUser?.uid,
  //               user_id_2: qrCode,
  //             }),
  //           }
  //         );
  //         if (!response.ok) {
  //           throw new Error(`Error: ${response.status}`);
  //         }
  //         const jsonData = await response.json();
  //         console.log(jsonData);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     } else {
  //       console.log("qrCode is not found");
  //     }
  //   }
  //   exchangePost();
  // }, [qrCode]);

  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="relative">
          <video
            ref={videoRef}
            className=" h-[100%] -z-50"
            autoPlay
            playsInline
          />
          <canvas
            ref={canvasRef}
            width="300px"
            height="300px"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-solid border-[5px] border-black rounded-[4px]"
          />
        </div>
      </div>
      <div className="flex justify-center mt-[20px]">
        <p className="font-bold text-2xl">{qrCode}</p>
      </div>
    </>
  );
};
