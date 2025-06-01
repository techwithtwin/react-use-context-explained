import { useCallback, useMemo, useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { User } from "@/types";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<null | User>(null);

  const login = useCallback((data: User) => {
    setUser(data);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);
  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
