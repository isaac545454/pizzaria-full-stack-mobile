import Head from "next/head";
import Image from "next/image";

//component
import Input from "../components/Input";
import Button from "../components/Button";

//img
import logoImg from "../public/logo.svg";

export default function Home() {
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
          <form className="flex flex-col w-[40vw] max-[700px]:w-[80vw]">
            <Input typeInput="text" placeholderInput="Email" />
            <Input typeInput="text" placeholderInput="Senha" />
            <Button
              loading={false}
              name="Acessar"
              onClick={() => alert("ola")}
            />
          </form>
        </div>
      </div>
    </>
  );
}
