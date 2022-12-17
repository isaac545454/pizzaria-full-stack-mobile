import Head from "next/head";
import Image from "next/image";
import Input from "../components/Input";
import logoImg from "../public/logo.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="text-white">
        <Image src={logoImg} alt="logo da pizzaria" width={300} height={100} />
        <div className="">
          <form className="flex flex-col w-[40vw]">
            <Input typeInput="text" placeholderInput="Email" />
            <Input typeInput="text" placeholderInput="Senha" />
          </form>
        </div>
      </div>
    </>
  );
}
