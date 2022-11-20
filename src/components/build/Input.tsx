import React, { FC } from "react";
import { NumProps, StrProps, VoidProps } from "../../dist/types/app";

interface InputProps {
  id?: StrProps;
  className?: StrProps;
  type: StrProps;
  placeholder: StrProps;
  value?: StrProps | NumProps;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => VoidProps;
}

const Input: FC<InputProps> = ({
  id,
  className,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      onChange={onChange}
      id={id}
      className={`border-none outline-none px-4 py-1 rounded ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
