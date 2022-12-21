import React, { createContext, ReactNode, useState } from "react";

import { destroyCookie } from "nookies";
import Router from "next/router";

interface Value {
  user: UserProps | null;
  isAuthenticated: boolean;
  signIn: (credemtials: SignInProps) => Promise<void>;
  signOut: () => void;
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

export const signOut = async () => {
  try {
    destroyCookie(undefined, "@nextauth.token");
    Router.push("/");
  } catch {
    console.log("error");
  }
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<UserProps | null>(null);
  const isAuthenticated = !!user;

  const signIn = async ({ email, password }: SignInProps) => {
    console.log({ email, password });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
