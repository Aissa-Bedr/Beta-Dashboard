import React, { FC } from "react";
import { StrProps } from "../../../dist/types/app";
import Div from "../../build/Div";

interface DdlogoProps {
  parent: StrProps;
  child?: StrProps;
}

const DdLogo: FC<DdlogoProps> = ({ parent, child }) => {
  return (
    <Div>
      <h3 className="text-2xl font-medium">{parent}</h3>
      {child && <p className="text-grey text-lg">{child}</p>}
    </Div>
  );
};

export default DdLogo;
