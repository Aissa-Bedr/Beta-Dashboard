import React, { FC } from "react";
import { DivProps } from "../../build/Div";
import Flex from "../../build/Flex";

interface BaseProps extends DivProps {}

const Base: FC<BaseProps> = ({ children }) => {
  return (
    <Flex className="gap-2" direction="row">
      {children}
    </Flex>
  );
};

export default Base;
