import Head from "next/head";
import React, { FormEvent, useState } from "react";
import Header from "../../components/Header";

export default function index() {
  const [name, setName] = useState<string>("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name) return;
    alert("ols");
  };
  return (
    <>
      <Head>
        <title>Nova Categoria </title>t
      </Head>
      <div>
        <Header />
        <main className="max-w-[720px] my-16 mx-auto px-8 flex justify-between flex-col">
          <h1 className="text-white text-2xl font-bold">Cadastrar Categoria</h1>
          <form className="flex flex-col my-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Digite o nome da categoria"
              className="p-4 bg-dark-900 rounded-md text-white border border-white mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="h-10 bg-green-primary font-bold rounded-md text-dark-900">
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
