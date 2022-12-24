import React, { useState, createContext, Children, ReactNode } from "react";
import { api } from "../services";
import async from "@react-native-async-storage/async-storage";

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
  const [loadingAuth, setLoadingAuth] = useState<boolean>(false);

  const isAuthenticated = !!user.name;

  async function signIn(email: string, password: string) {
    console.log(email, password);
    setLoadingAuth(true);
    try {
      const response = await api.post("/session", {
        email: email,
        password: password,
      });

      const data = { ...response.data };
      await async.setItem("@authPizza", JSON.stringify(data));
      setUser(response.data);
      setLoadingAuth(false);
    } catch (error) {
      alert("opps... error");
      setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
