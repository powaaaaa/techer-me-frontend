"use client";

import { QRPage } from "@/components/pages/QR";
import { Suspense } from "react";

const QR: React.FC = () => (
  <Suspense>
    <QRPage />
  </Suspense>
);

export default QR;
