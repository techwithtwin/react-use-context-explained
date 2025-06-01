import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export const useUser = () => {
  const auth = useContext(AuthContext);

  return auth;
};
