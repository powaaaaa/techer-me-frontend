"use client";

import { QRExchangePage } from "@/components/pages/QRExchangePage";
import { Suspense } from "react";

const QRExchange: React.FC = () => (
  <Suspense>
    <QRExchangePage />
  </Suspense>
);

export default QRExchange;
