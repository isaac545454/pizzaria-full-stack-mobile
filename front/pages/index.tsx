import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//component
import Input from "../components/Input";
import Button from "../components/Button";
import { canSSRGuest } from "../ultils/canSSRGuest";

//context
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

//img
import logoImg from "../public/logo.svg";
import { toast } from "react-toastify";
import { GetServerSideProps } from "next";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useContext(AuthContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (email === "" || password === "") {
      return toast.warn("preencha os campos");
    }
    setIsLoading(true);
    let data = {
      email,
      password,
    };
    await signIn(data);
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="text-white flex flex-col items-center justify-center h-[80vh]">
        <Image
          src={logoImg}
          alt="logo da pizzaria"
          width={300}
          height={100}
          className="mb-5"
        />
        <div className="">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[40vw] max-[700px]:w-[80vw]"
          >
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button loading={isLoading} name="Acessar" />
          </form>
          <div className="flex justify-center my-4 hover:text-gray-400 transition-colors">
            <Link href="/signup">Não possui uma Conta? Cadastre-se</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
