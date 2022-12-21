import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

interface PropsArea extends InputHTMLAttributes<HTMLTextAreaElement> {}

export default function Input({ ...rest }: Props) {
  return (
    <input
      {...rest}
      className={`mb-4 h-10 rounded-lg bg-dark-900 text-white p-4 border
         border-gray-200 placeholder:text-gray-400 w-full`}
    />
  );
}

export function TextArea({ ...res }: PropsArea) {
  return (
    <div>
      <textarea
        {...res}
        className={`mb-4 h-10 rounded-lg bg-dark-900 text-white p-4 border
       border-gray-200 placeholder:text-gray-400 w-full`}
      ></textarea>
    </div>
  );
}
