import React, { FC, ReactNode } from "react";
import { StrProps, VoidProps } from "../../dist/types/app";

export interface DivProps {
  id?: StrProps;
  className?: StrProps;
  children?: ReactNode;
  onClick?: () => VoidProps;
  onMouseEnter?: () => VoidProps;
  onMouseLeave?: () => VoidProps;
}

const Div: FC<DivProps> = ({
  id,
  className,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      onClick={onClick}
      id={id}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default Div;
