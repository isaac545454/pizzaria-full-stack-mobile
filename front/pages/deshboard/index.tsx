import Head from "next/head";
import { canSSRAuth } from "../../ultils/canSSRAuth";
import Header from "../../components/Header";

export default function Deshboard() {
  return (
    <>
      <Head>
        <title>Painel</title>
      </Head>
      <div>
        <Header />
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
