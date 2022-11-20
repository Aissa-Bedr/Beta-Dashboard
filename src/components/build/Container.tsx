import React, { FC, ReactNode } from "react";
import { StrProps } from "../../dist/types/app";
import Div from "./Div";

interface ContainerProps {
  children: ReactNode;
  className?: StrProps;
}

const Container: FC<ContainerProps> = ({ className, children }) => {
  return (
    <Div className={`container m-auto sm:p-2 ${className}`}>{children}</Div>
  );
};

export default Container;
