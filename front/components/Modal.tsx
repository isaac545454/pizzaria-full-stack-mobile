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
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyle}>
      <button
        onClick={onRequestClose}
        className="react-modal-close"
        style={{ background: "transparent", border: 0 }}
      >
        <FiX size={45} color="#f34748" />
      </button>
      <div>
        <h1>Detalhes do pedido </h1>
        <span>
          mesa:
          <strong>{order[0].order.table}</strong>
        </span>
        {order.map((item) => (
          <section className="flex flex-col" key={item.id}>
            <span>
              {item.amount} -<strong>{item.product.name}</strong>
            </span>
            <span className="">{item.product.description}</span>
          </section>
        ))}
      </div>
    </Modal>
  );
}
