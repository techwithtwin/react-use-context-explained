import type { ContextType } from "@/types";
import { createContext } from "react";

export const AuthContext = createContext<ContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});
