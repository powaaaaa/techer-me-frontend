import { useRouter } from "next/navigation";

type UseWelcomePage = {
  handleLoginByGitHub: () => void;
  handleLoinByEmail: () => void;
};

export const useWelcomePage = (): UseWelcomePage => {
  const router = useRouter();

  const handleLoginByGitHub = () => {
    console.log("GitHub認証");
    router.push(`/top`);
  };

  const handleLoinByEmail = () => {
    console.log("e-mail認証");
    router.push(`/top`);
  };

  return { handleLoginByGitHub, handleLoinByEmail };
};
