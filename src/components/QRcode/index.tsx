import React from "react";
import QRCodeComponent from "react-qr-code";

type Props = { url: string };

export const QRcode: React.FC<Props> = ({ url }) => {
  return (
    <>
      <QRCodeComponent value={url} />
    </>
  );
};
