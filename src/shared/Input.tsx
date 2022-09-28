import Error from "./Error";
import React from "react";

type InputProps = {
  label: string;
  id: string;
  type?: "text" | "number" | "email" | "password" | "tel";
  classname?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; //you could use any
  error?: string;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  id,
  type,
  value,
  onChange,
  error,
  onBlur,
}: InputProps) => {
  return (
    <>
      <label htmlFor={id} className="font-mono ml-3 ">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="border-2 ml-2 mb-2"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Error error={error} />}
    </>
  );
};

export default Input;
