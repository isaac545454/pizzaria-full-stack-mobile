import React, { ButtonHTMLAttributes } from "react";

//icon
import { FaSpinner } from "react-icons/fa";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  name: string;
}

export default function Button({ loading, name, ...rest }: Props) {
  return (
    <button
      disabled={loading}
      className="bg-red-primary p-4 flex justify-center items-center hover:bg-red-500 transition-colors"
      {...rest}
    >
      {!loading && <a className="text-white">{name}</a>}
      {loading && <FaSpinner className="animate-spin" />}
    </button>
  );
}
