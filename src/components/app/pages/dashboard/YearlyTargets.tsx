import React, { FC } from "react";
import Div from "../../../build/Div";
import Flex from "../../../build/Flex";
import DdLogo from "../../private/DdLogo";
import { BiDollar, BiCodeAlt } from "react-icons/bi";
import { CiUser } from "react-icons/ci";

const YearlyTargets: FC = () => {
  return (
    <Div className="w-full">
      <DdLogo parent="Yearly Targets" child="Targets Of The Year" />
      <Flex className="w-full" direction="col">
        <Flex className="w-full items-center gap-4 p-2" direction="row">
          <Div className="p-6 dark:bg-blue-400 bg-red-300 rounded text-light">
            {<BiDollar />}
          </Div>
          <Flex className="w-full gap-2" direction="col">
            <p className="text-grey">Money</p>
            <p className="font-medium">${20000}</p>
            <Div className="relative w-4/5 h-1 dark:bg-blue-400 bg-red-300">
              <Div className="absolute right-0 -top-8 text-sm text-light dark:bg-blue-400 bg-red-300 p-1 rounded">
                80%
              </Div>
            </Div>
          </Flex>
        </Flex>
        <Flex className="w-full items-center gap-4 p-2" direction="row">
          <Div className="p-6 bg-orange-400 rounded text-light">
            {<BiCodeAlt />}
          </Div>
          <Flex className="w-full gap-2" direction="col">
            <p className="text-grey">Projects</p>
            <p className="font-medium">{24}</p>
            <Div className="relative w-1/2 h-1 bg-orange-400">
              <Div className="absolute right-0 -top-8 text-sm text-light bg-orange-400 p-1 rounded">
                50%
              </Div>
            </Div>
          </Flex>
        </Flex>
        <Flex className="w-full items-center gap-4 p-2" direction="row">
          <Div className="p-6 bg-green-400 rounded text-light">
            {<CiUser />}
          </Div>
          <Flex className="w-full gap-2" direction="col">
            <p className="text-grey">Team</p>
            <p className="font-medium">{12}</p>
            <Div className="relative w-3/4 h-1 bg-green-400">
              <Div className="absolute right-0 -top-8 text-sm text-light bg-green-400 p-1 rounded">
                75%
              </Div>
            </Div>
          </Flex>
        </Flex>
      </Flex>
    </Div>
  );
};

export default YearlyTargets;
