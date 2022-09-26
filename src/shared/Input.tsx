type InputProps = {
  label: string;
  id: string;
  type?: "text" | "number" | "email" | "password" | "tel";
};

const Input = ({ label, id, type }: InputProps) => {
  return (
    <>
      <label htmlFor={id} className="font-mono max-w-xl min-w-maxl">
        {label}
      </label>
      <input id={id} type={type} className="border-2 ml-2 mb-5 " />
    </>
  );
};

export default Input;
