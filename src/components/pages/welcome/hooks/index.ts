import { useRouter } from "next/navigation";
import { firebaseConfig } from "@/lib/firebase/firebase";
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

type UseWelcomePage = {
  handleLoginByGitHub: () => void;
  handleLoinByEmail: () => void;
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const useWelcomePage = (): UseWelcomePage => {
  const router = useRouter();

  const handleLoginByGitHub = async () => {
    const provider = new GithubAuthProvider();
    await signInWithPopup(auth, provider);
    router.push(`/top`);
  };

  const handleLoinByEmail = () => {
    console.log("e-mail認証");
    router.push(`/top`);
  };

  return { handleLoginByGitHub, handleLoinByEmail };
};
