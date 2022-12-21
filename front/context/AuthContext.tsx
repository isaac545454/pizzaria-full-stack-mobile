import React, { createContext, ReactNode, useState } from "react";
import { api, api as Api } from "../services/apiClient";

import { destroyCookie, setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { log } from "console";

interface Value {
  user: UserProps | null;
  isAuthenticated: boolean;
  signIn: (credemtials: SignInProps) => Promise<void>;
  signOut: () => void;
  signUp: (credemtials: SignUpProps) => Promise<void>;
}

type UserProps = {
  id: string;
  name: string;
  email: string;
};

type SignUpProps = {
  name: string;
  email: string;
  password: string;
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
    try {
      const response = await Api.post("/session", {
        email,
        password,
      });

      const { id, name, token } = response.data;

      setCookie(undefined, "@nextauth.token", token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      setUser({
        id,
        name,
        email,
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      //redirect
      Router.push("/deshboard");

      console.log(response);
    } catch (error) {}
  };

  const signUp = async ({ name, email, password }: SignUpProps) => {
    try {
      const response = await api.post("/user", {
        name,
        email,
        password,
      });

      console.log("cadastrado");
      Router.push("/");
    } catch (error) {
      console.log("erri", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
