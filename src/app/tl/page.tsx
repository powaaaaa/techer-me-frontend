"use client";

import { TLPage } from "@/components/pages/TL";
import { Suspense } from "react";

const TL: React.FC = () => (
  <Suspense>
    <TLPage />
  </Suspense>
);

export default TL;
