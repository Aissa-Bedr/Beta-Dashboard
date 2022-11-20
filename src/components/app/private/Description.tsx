import React, { FC } from "react";
import { BoolProps, StrProps } from "../../../dist/types/app";
import Div from "../../build/Div";

interface Description {
  text: StrProps;
  action: BoolProps;
  useCenter: BoolProps;
}

const Description: FC<Description> = ({ text, action, useCenter }) => {
  return (
    <Div
      className={`flex items-center justify-center absolute ${
        useCenter ? "left-1/3 -translate-x-1/3  -bottom-8" : "right-0 -bottom-8"
      } w-24 bg-dark text-white dark:bg-light dark:text-dark p-0.5 rounded ${
        action ? "block" : "hidden"
      } cursor-default text-sm font-bold`}
    >
      {text}
    </Div>
  );
};

export default Description;
