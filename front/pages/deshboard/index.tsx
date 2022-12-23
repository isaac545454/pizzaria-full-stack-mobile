import Head from "next/head";
import { canSSRAuth } from "../../ultils/canSSRAuth";
import Header from "../../components/Header";
import { FiRefreshCcw } from "react-icons/fi";

export default function Deshboard() {
  return (
    <>
      <Head>
        <title>Painel</title>
      </Head>
      <div>
        <Header />
        <main className="max-w-[720px] mx-auto my-16 px-8 flex flex-col">
          <div className="flex">
            <h1 className="text-white font-bold text-2xl mr-4">
              Ultimos pedidos
            </h1>

            <button>
              <FiRefreshCcw color="#3FFFA3" size={30} />
            </button>
          </div>
          <article className="flex flex-col my-4">
            <section className="flex bg-dark-900 mb-4 items-center rounded-md">
              <button className="bg-transparent text-white text-2xl h-[60px] items-center flex">
                <div className="w-2 bg-green-primary h-[60px] rounded-tl-md rounded-bl-md mr-4"></div>
                <span>mesa 40</span>
              </button>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
