import { useState } from "react";

type UseQRPage = {
  eventName: string;
  eventQRCode: string;
  handlePrintPDF: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleGoOwner: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const demoName = "Hack U Osaka 2024";

export const useQRPage = (): UseQRPage => {
  const [eventName, setEventName] = useState<string>(demoName);
  const [eventQRCode, setEventQRCode] = useState<string>("");

  const handlePrintPDF = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("pdf");
  };

  const handleGoOwner = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("owner");
  };

  return {
    eventName,
    eventQRCode,
    handlePrintPDF,
    handleGoOwner,
  };
};
