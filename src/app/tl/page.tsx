"use client";

import { TLPage } from "@/components/pages/TL";
import { getDatabase } from "firebase/database";
import { GithubAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "@/lib/firebase/firebase";
import { initializeApp } from "firebase/app";
import { Suspense } from "react";

const app = initializeApp(firebaseConfig);

//githab認証
async function githubLogin() {
  const provider = new GithubAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider);
}

const TL: React.FC = () => (
  <Suspense>
    <TLPage />
    <button onClick={githubLogin}>login</button>
  </Suspense>
);

export default TL;
