import React from "react";

type CheckboxProps = {
  className?: string;
  id: string;
  label: string;
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox({
  id,
  className,
  label,
  value,
  checked,
  onChange,
}: CheckboxProps) {
  return (
    <div className="flex gap-5 ml-3">
      <input
        checked={checked}
        value={value}
        id={id}
        className="border border-gray-600 p-2"
        type="checkbox"
        onChange={onChange}
      />
      <label className="block font-mono" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
