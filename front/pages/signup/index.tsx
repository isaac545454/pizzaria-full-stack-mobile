import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../public/logo.svg";
//components
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function index() {
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
          <form className="flex flex-col w-[40vw] max-[700px]:w-[80vw]">
            <Input typeInput="text" placeholderInput="Nome" />
            <Input typeInput="text" placeholderInput="Email" />
            <Input typeInput="text" placeholderInput="Senha" />
            <Button
              loading={false}
              name="Cadastrar"
              onClick={() => alert("ola")}
            />
          </form>
        </div>
      </div>
    </>
  );
}
