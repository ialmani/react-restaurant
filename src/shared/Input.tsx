type InputProps = {
  label: string;
  id: string;
};

const Input = (prop: InputProps) => {
  return (
    <>
      <label htmlFor={prop.id} className="font-mono">
        {prop.label}
      </label>
      <input id={prop.id} type="text" className="border-2 ml-2" />
    </>
  );
};

export default Input;
