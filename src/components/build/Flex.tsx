import React, { FC } from "react";
import { FlexDirection } from "../../dist/types/app";
import Div, { DivProps } from "./Div";

interface FlexProps extends DivProps {
  direction?: FlexDirection;
}

const Flex: FC<FlexProps> = ({
  id,
  className,
  children,
  direction,
  onClick,
}) => {
  return (
    <Div
      onClick={onClick}
      id={id}
      className={`flex ${direction && `flex-${direction}`} ${className}`}
    >
      {children}
    </Div>
  );
};

export default Flex;
