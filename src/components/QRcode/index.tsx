import React from "react";
import QRCodeComponent from "react-qr-code";

type Props = {
  url: string;
  className?: string;
};

export const QRcode: React.FC<Props> = ({ url, className }) => {
  return (
    <>
      <QRCodeComponent className={className} value={url} />
    </>
  );
};
