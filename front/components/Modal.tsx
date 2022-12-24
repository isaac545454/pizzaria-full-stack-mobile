import React from "react";
import Modal from "react-modal";
import { OrderProps } from "../pages/deshboard/index";
import { FiX } from "react-icons/fi";

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
  order: OrderProps[];
}

export default function ModalOrder({ isOpen, onRequestClose, order }: Props) {
  const customStyle = {
    content: {
      top: "50%",
      bottom: "auto",
      left: "50%",
      right: "auto",
      padding: "30px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1d1d2e",
    },
  };

  const handleFinish = () => {
    alert("aaaaa");
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyle}>
      <div className="mx-5 w-[40vw]">
        <button
          onClick={onRequestClose}
          className="react-modal-close"
          style={{ background: "transparent", border: 0 }}
        >
          <FiX size={45} color="#f34748" />
        </button>
        <div className="my-5">
          <h1 className="text-white mb-4 text-2xl">Detalhes do pedido </h1>
          <span className="text-white text-xl ">
            mesa:
            <strong className="ml-2 ">{order[0].order.table}</strong>
          </span>
          {order.map((item) => (
            <section className="flex flex-col mt-4" key={item.id}>
              <span className="text-white text-xl mb-1">
                {item.amount} -{" "}
                <strong className="text-green-primary">
                  {item.product.name}
                </strong>
              </span>
              <span className="mb-4 text-white">
                {item.product.description}
              </span>
            </section>
          ))}

          <button
            className="bg-dark-900 text-red-600 px-4 py-2 mt-10"
            onClick={handleFinish}
          >
            Concluir Pedido
          </button>
        </div>
      </div>
    </Modal>
  );
}
