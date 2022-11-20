import React, { FC, ReactNode } from "react";
import { dashboardDivStyle } from "../../../dist/variables/main";
import Div from "../../build/Div";

interface ScopeProps {
  element: ReactNode;
}

const Scope: FC<ScopeProps> = ({ element }) => {
  return <Div className={dashboardDivStyle}>{element}</Div>;
};

export default Scope;
