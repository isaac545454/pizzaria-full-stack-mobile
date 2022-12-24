import React, { useState, createContext, Children, ReactNode } from "react";

type Auth = {
  user: UserProps;
  isAuthenticated: boolean;
};

type UserProps = {
  id: string;
  name: string;
  email: string;
  token: string;
};

interface Props {
  children: ReactNode;
}

export const AuthContext = createContext({} as Auth);

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<UserProps>({
    id: "",
    name: "",
    email: "",
    token: "",
  });

  const isAuthenticated = !!user.name;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
