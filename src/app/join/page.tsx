"use client";

import { JoinPage } from "@/components/pages/Join";
import { Suspense } from "react";

const Join: React.FC = () => (
  <Suspense>
    <JoinPage />
  </Suspense>
  );

export default Join;
