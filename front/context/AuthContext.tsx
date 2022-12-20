import React, { createContext, ReactNode, useState } from "react";

interface Value {
  user: UserProps | null;
  isAuthenticated: boolean;
  signIn: (credemtials: SignInProps) => Promise<void>;
}

type UserProps = {
  id: string;
  name: string;
  email: string;
};

type SignInProps = {
  email: string;
  password: string;
};

interface Props {
  children: ReactNode;
}

export const AuthContext = createContext({} as Value);

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<UserProps | null>(null);
  const isAuthenticated = !!user;

  const signIn = async () => {
    alert("login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
