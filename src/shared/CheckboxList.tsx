import Error from "./Error";
type CheckboxListProps = {
  className?: string;
  children: React.ReactNode;
  label: string;
  error?: string;
};

export default function CheckboxList({
  children,
  className = "",
  label,
  error,
}: CheckboxListProps) {
  return (
    <fieldset className={className}>
      {error && <Error error={error} />}
      <legend className="ml-3 mb-2 font-mono">{label}</legend>

      {children}
    </fieldset>
  );
}
