"use client";
import { TLPage } from "@/components/pages/TL";
import { getDatabase } from "firebase/database";
import { GithubAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "@/lib/firebase/firebase";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);

//githab認証
async function githubLogin() {
  const provider = new GithubAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider);
}

export default function Home() {
  return (
    <>
      <TLPage />
      <button onClick={githubLogin}>login</button>
    </>
  );
}
