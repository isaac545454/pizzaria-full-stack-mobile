import React from "react";

interface Props {
  typeInput: string;
  placeholderInput: string;
}

export default function Input({ typeInput, placeholderInput }: Props) {
  return (
    <div>
      <input
        type={typeInput}
        className={`mb-4 h-10 rounded-lg bg-dark-900 text-white p-4 border
         border-gray-200 placeholder:text-gray-400 w-full`}
        placeholder={placeholderInput}
      />
    </div>
  );
}

export function TextArea({ typeInput, placeholderInput }: Props) {
  return (
    <div>
      <textarea
        className={`mb-4 h-10 rounded-lg bg-dark-900 text-white p-4 border
       border-gray-200 placeholder:text-gray-400 w-full`}
        placeholder={placeholderInput}
      ></textarea>
    </div>
  );
}
