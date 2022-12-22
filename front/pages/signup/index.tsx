import React, { FormEvent, useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../public/logo.svg";
import { AuthContext } from "../../context/AuthContext";

//components
import Input from "../../components/Input";
import Button from "../../components/Button";
import { toast } from "react-toastify";

export default function index() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { signUp } = useContext(AuthContext);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!name || !email || !password)
      return toast.warn("preencha todos os campos");
    setIsLoading(true);

    await signUp({ name, email, password });
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>Faça sei cadastro agora</title>
      </Head>
      <div className="text-white flex flex-col items-center justify-center h-[80vh]">
        <Image
          src={logoImg}
          alt="logo da pizzaria"
          width={300}
          height={100}
          className="mb-"
        />
        <div className="">
          <div className="flex justify-center my-6">
            <h1 className="font-bold text-2xl">Criando sua conta</h1>
          </div>
          <form
            className="flex flex-col w-[40vw] max-[700px]:w-[80vw]"
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
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
            <Button loading={isLoading} name="Cadastrar" />
          </form>
        </div>
      </div>
    </>
  );
}
