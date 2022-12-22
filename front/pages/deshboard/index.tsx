import { canSSRAuth } from "../../ultils/canSSRAuth";

export default function Deshboard() {
  return <div>index</div>;
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
