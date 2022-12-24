import Head from "next/head";
import { canSSRAuth } from "../../ultils/canSSRAuth";
import Header from "../../components/Header";
import { FiRefreshCcw } from "react-icons/fi";
import { setupAPIClient } from "../../services/api";
import { useState } from "react";
import Modal from "react-modal";
import ModalOrder from "../../components/Modal";

interface Props {
  data: OrderItem[];
}

type OrderItem = {
  id: string;
  table: number | string;
  status: boolean;
  draft: boolean;
  name: string | null;
};

export type OrderProps = {
  id: string;
  amount: number;
  order_id: string;
  product_id: string;
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    banner: string;
  };
  order: {
    id: string;
    table: string | number;
    status: boolean;
    name: string | null;
  };
};

const dataFake: OrderProps[] = [
  {
    id: "kkkkkk",
    amount: 2,
    order_id: "kakkddk",
    product_id: "jjjjjjjj",
    product: {
      id: "dakdkakak",
      name: "pizza",
      description: "pizza",
      price: "35.00",
      banner: "aaaaaa",
    },
    order: {
      id: "mmmmmmm",
      table: "35",
      status: false,
      name: "isaac,",
    },
  },
];

export default function Deshboard({ data }: Props) {
  const [orderList, setOrderList] = useState<OrderItem[]>(data || []);
  const [ModalItem, setModalItem] = useState<OrderProps[]>([]);
  const [show, setShow] = useState<boolean>(false);

  const showOrder = async (id: string) => {
    const apiClient = setupAPIClient();
    const response = await apiClient.get<OrderProps[]>("/order/detail", {
      params: {
        order_id: id,
      },
    });

    setModalItem(dataFake);
    setShow(true);
  };

  const handleModalClose = () => {
    setShow(false);
  };

  Modal.setAppElement("#__next");

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
            {orderList.map((order) => (
              <section
                className="flex bg-dark-900 mb-4 items-center rounded-md"
                key={order.id}
              >
                <button
                  className="bg-transparent text-white text-2xl h-[60px] items-center flex"
                  onClick={() => showOrder(order.id)}
                >
                  <div className="w-2 bg-green-primary h-[60px] rounded-tl-md rounded-bl-md mr-4"></div>
                  <span>{order.name}</span>
                </button>
              </section>
            ))}
            <section className="flex bg-dark-900 mb-4 items-center rounded-md">
              <button
                className="bg-transparent text-white text-2xl h-[60px] items-center flex"
                onClick={() => showOrder("aaa")}
              >
                <div className="w-2 bg-green-primary h-[60px] rounded-tl-md rounded-bl-md mr-4"></div>
                <span>mesa 38</span>
              </button>
            </section>
          </article>
        </main>
        {show && (
          <ModalOrder
            onRequestClose={handleModalClose}
            isOpen={show}
            order={ModalItem}
          />
        )}
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const { data } = await apiClient.get("/orders");

  return {
    props: {
      data,
    },
  };
});
