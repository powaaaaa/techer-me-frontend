import { useState } from "react";

type UseStickerPreviewPage = {
  userIcon: string;
};

export const useStickerPreviewPage = () => {
  const [userIcon, setUserIcon] = useState<string>("");

  return { userIcon };
};
