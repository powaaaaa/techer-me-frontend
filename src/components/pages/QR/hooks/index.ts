import { useRef, useState } from "react";
import QRCode from "qrcode";
import { pdf } from "@react-pdf/renderer";
import { QrPdf } from "./pdf";

type UseQRPage = {
  PDFRef: React.RefObject<HTMLDivElement>;
  eventName: string;
  eventQRCode: string;
  handleGoOwner: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const demoName = "Hack U Osaka 2024";

export const useQRPage = (): UseQRPage => {
  const PDFRef = useRef<HTMLDivElement>(null);
  const [eventName, setEventName] = useState<string>(demoName);
  const [eventQRCode, setEventQRCode] = useState<string>("");

  const handleGoOwner = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("owner");
  };

  return {
    PDFRef,
    eventName,
    eventQRCode,
    handleGoOwner,
  };
};
