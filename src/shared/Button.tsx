import { clsx } from "clsx";

type ButtonProps = {
  classname?: string;
  children: React.ReactNode;
  type: "submit" | "button";
  variant: "primary" | "secondary";
};

const variantMap = {
  primary:
    "bg-cyan-800 text-white w-24 mt-2 cursor-pointer hover:bg-cyan-700 p-2 rounded",
  secondary:
    "bg-gray-500 over:bg-cyan-700  text-white w-24 mt-2 cursor-pointer p-2 rounded",
};

const Button = ({ children, type, variant, classname = "" }: ButtonProps) => {
  return (
    <>
      <button type={type} className={clsx(variantMap[variant], classname)}>
        {children}
      </button>
    </>
  );
};

export default Button;
