export type User = {
  username: string;
  role: "ADMIN" | "USER";
  profile: string;
};

export type ContextType = {
  user: User | null;
  login: (data: User) => void;
  logout: () => void;
};
