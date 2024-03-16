"use client";

import { TopPage } from "@/components/pages/Top";
import { Suspense } from "react";

const Top: React.FC = () => (
  <Suspense>
    <TopPage />
  </Suspense>
);

export default Top;
