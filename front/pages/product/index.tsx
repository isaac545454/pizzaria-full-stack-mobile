import Head from "next/head";
import React, { ChangeEvent, useState } from "react";
import Header from "../../components/Header";
import { canSSRAuth } from "../../ultils/canSSRAuth";
import { FiUpload } from "react-icons/fi";
import Image from "next/image";
import { setupAPIClient } from "../../services/api";
import { type } from "os";

interface Props {
  categoryList: ItemProps[];
}

type ItemProps = {
  id: string;
  name: string;
};

export default function index({ categoryList }: Props) {
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<null | File>(null);
  const [categories, setCategories] = useState<ItemProps[]>(categoryList);
  const [categorieSelected, setCategorieSelected] = useState<number>(0);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const image = e.target.files[0];
    if (!image) return;

    if (image.type === "image/jpeg" || image.type === "image/png") {
      setImageUrl(image);
      setAvatarUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setCategorieSelected(Number(e.target.value));
  };

  return (
    <>
      <Head>
        <title>Cadastrar Produto</title>
      </Head>
      <div>
        <Header />
        <main className="max-w-[720px] my-16 mx-auto px-8 flex justify-between flex-col">
          <h1 className="text-white text-2xl">Cadastrar produto</h1>
          <form className="flex flex-col my-4">
            <label className="w-full h-[280px] mb-4  rounded-md bg-dark-900 flex justify-center items-center cursor-pointer">
              <span className="z-[99] absolute opacity-40 transition-colors hover:scale-125 hover:opacity-100">
                <FiUpload size={30} color="white" />
              </span>
              <input
                type="file"
                className="hidden"
                accept="image/png, image/jpeg"
                onChange={handleFile}
              />
              {avatarUrl && (
                <Image
                  src={avatarUrl}
                  width="150"
                  height="250"
                  alt="imagem do produto"
                  className="w-full h-full bg-cover rounded-md"
                />
              )}
            </label>
            <select
              value={categorieSelected}
              onChange={handleSelect}
              className="w-full h-[40px] rounded-md mb-4 text-white bg-dark-900 border
          border-white px-2"
            >
              {categories.map((item, index) => (
                <option key={item.id} value={index}>
                  {item.name}
                </option>
              ))}
            </select>
            <input
              type="text "
              placeholder="DIgite o nome do produto "
              className="mb-4 text-white bg-dark-900 border border-white px-2 h-[40px] rounded-md"
            />
            <input
              type="text "
              placeholder="DIgite o Preço do produto  "
              className="mb-4 text-white bg-dark-900 border border-white px-2 h-[40px] rounded-md"
            />
            <textarea
              placeholder="descreva seu produto..."
              className="w-full h-[120px] mb-4 resize-none bg-dark-900 text-white p-2 rounded-md 
              border border-white"
            />
            <button className="h-[40px] bg-green-primary text-2xl text-dark-900 font-bold rounded-md">
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const { data } = await apiClient.get("/category");

  return {
    props: {
      categoryList: data,
    },
  };
});
