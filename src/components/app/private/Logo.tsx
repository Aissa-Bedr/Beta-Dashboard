import React, { FC } from "react";
import { StrProps } from "../../../dist/types/app";
import Div, { DivProps } from "../../build/Div";

interface LogoProps extends DivProps {
  logoName: StrProps;
}

const Logo: FC<LogoProps> = ({ className, logoName }) => {
  return (
    <Div
      className={`w-fit relative font-bold text-3xl my-8 text-dark dark:text-light ${className}`}
    >
      <p>{logoName}</p>
      <Div className="absolute left-0 -bottom-2 w-1/2 h-1 bg-dark dark:bg-white"></Div>
    </Div>
  );
};

export default Logo;
