import React, { FC } from "react";
import { NumProps } from "../../dist/types/app";
import Div, { DivProps } from "./Div";

interface GridProps extends DivProps {
  cols?: NumProps;
}

const Grid: FC<GridProps> = ({ id, className, children, cols }) => {
  return (
    <Div id={id} className={`grid grid-cols-${cols} ${className}`}>
      {children}
    </Div>
  );
};

export default Grid;
