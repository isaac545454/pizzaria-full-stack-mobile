import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//component
import Input from "../components/Input";
import Button from "../components/Button";

//context
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

//img
import logoImg from "../public/logo.svg";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let data = {
      email,
      password,
    };
    await signIn(data);
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
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              type="text"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button loading={false} name="Acessar" />
          </form>
          <div className="flex justify-center my-4 hover:text-gray-400 transition-colors">
            <Link href="/signup">Não possui uma Conta? Cadastre-se</Link>
          </div>
        </div>
      </div>
    </>
  );
}
