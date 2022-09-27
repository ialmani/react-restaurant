import clsx from "clsx";
import React from "react";

type InputProps = {
  label: string;
  id: string;
  type?: "text" | "number" | "email" | "password" | "tel";
  classname?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; //you could use any
  error?: string;
};
const checkboxValue = {};

const Input = ({ label, id, type, value, onChange, error }: InputProps) => {
  return (
    <>
      <label htmlFor={id} className="font-mono ml-3 ">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="border-2 ml-2 mb-5"
        value={value}
        onChange={onChange}
      />
    </>
  );
};
// className={clsx(variantMap[variant], classname)}
export default Input;
