type CheckboxListProps = {
  className?: string;
  children: React.ReactNode;
  label: string;
};

export default function CheckboxList({
  children,
  className = "",
  label,
}: CheckboxListProps) {
  return (
    <fieldset className={className}>
      <legend className="ml-3 mb-2 font-mono">{label}</legend>

      {children}
    </fieldset>
  );
}
