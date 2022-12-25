import React, {
  useState,
  createContext,
  Children,
  ReactNode,
  useEffect,
} from "react";
import { api } from "../services";
import async from "@react-native-async-storage/async-storage";

type Auth = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  loadingAuth: boolean;
  loading: boolean;
  signOut: () => Promise<void>;
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
  const [loading, setLoading] = useState<boolean>(true);

  const isAuthenticated = !!user.name;

  useEffect(() => {
    async function getUser() {
      const userInfo = await async.getItem("@authPizza");
      let hashUser: UserProps = JSON.parse(userInfo || "{}");

      if (Object.keys(hashUser).length > 0) {
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${hashUser.token}`;
      }
      setUser(hashUser);
      setLoading(false);
    }
    getUser();
  }, []);

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

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      setUser(response.data);
      setLoadingAuth(false);
    } catch (error) {
      alert("opps... error");
      setLoadingAuth(false);
    }
  }

  async function signOut() {
    await async.clear().then(() => {
      setUser({
        id: "",
        name: "",
        email: "",
        token: "",
      });
    });
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, loadingAuth, loading, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
