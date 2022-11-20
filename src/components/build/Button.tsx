import React, { FC, ReactNode } from "react";
import { StrProps, UndefProps } from "../../dist/types/app";
import { DivProps } from "./Div";

interface ButtonProps extends DivProps {}

const Button: FC<ButtonProps> = ({
  onClick,
  className,
  children,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded ${className} duration-500`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
