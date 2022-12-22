import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const { signOut } = useContext(AuthContext);
  return (
    <header className="h-20 ">
      <div className="max-w-[1120px] h-20 mx-auto px-8 flex justify-between items-center">
        <Link href="/deshboard">
          <Image
            src="/logo.svg"
            width={190}
            height={60}
            alt="sujeito pizza"
            className="cursor-pointer"
          />
        </Link>
        <nav className="flex items-center text-white">
          <Link
            href="/categiry"
            className="px-2 inline-block relative hover:text-red-500 transition-colors"
          >
            Categorias
          </Link>
          <Link
            href="/product"
            className="px-2 inline-block relative ml-8 hover:text-red-500 transition-colors"
          >
            Cardapio
          </Link>

          <button onClick={signOut}>
            <FiLogOut
              color="#FFF"
              size={25}
              className="hover:scale-150 transition-colors mx-8"
            />
          </button>
        </nav>
      </div>
    </header>
  );
}
