import React, { useState, createContext, Children, ReactNode } from "react";

type Auth = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
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

  async function signIn(email: string, password: string) {
    console.log(email, password);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
