"use client";
import { useEffect, useState, useRef } from "react";
import jsQR from "jsqr";

export default function Home() {
  const videoRef: any = useRef(null);
  const canvasRef: any = useRef(null);
  const canvasContextRef: any = useRef(null);
  const [qrCode, setQrCode] = useState("");

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

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <video ref={videoRef} className="h-[100%]" autoPlay />
        <canvas
          ref={canvasRef}
          width="360"
          height="360"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-solid border-[5px] border-gray rounded-[4px]"
        />
      </div>
      <div className="flex justify-center mt-[20px]">
        <p className="font-bold text-2xl">{qrCode}</p>
      </div>
    </>
  );
}
