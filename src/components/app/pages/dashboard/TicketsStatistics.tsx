import React, { FC } from "react";
import Flex from "../../../build/Flex";
import Grid from "../../../build/Grid";
import DdLogo from "../../private/DdLogo";
import { BsCardList } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { CiSquareRemove } from "react-icons/ci";

const TicketsStatistics: FC = () => {
  return (
    <Flex className="gap-2" direction="col">
      <DdLogo
        parent="Tickets Statistics"
        child="Everything About Support Tickets"
      />
      <Grid className="grid-cols-1 md:grid-cols-2 gap-4">
        <Flex
          className="items-center justify-center gap-1 w-full h-28 border-solid border-2 border-gray-400 rounded"
          direction="col"
        >
          {<BsCardList className="text-3xl text-orange-400" />}
          <h3 className="font-medium text-2xl">{2500}</h3>
          <p className="text-grey">Total</p>
        </Flex>
        <Flex
          className="items-center justify-center gap-1 w-full h-28 border-solid border-2 border-gray-400 rounded"
          direction="col"
        >
          {<FaSpinner className="text-3xl text-blue-400" />}
          <h3 className="font-medium text-2xl">{500}</h3>
          <p className="text-grey">Pending</p>
        </Flex>
        <Flex
          className="items-center justify-center gap-1 w-full h-28 border-solid border-2 border-gray-400 rounded"
          direction="col"
        >
          {<IoMdCheckmark className="text-3xl text-green-400" />}
          <h3 className="font-medium text-2xl">{1900}</h3>
          <p className="text-grey">Closed</p>
        </Flex>
        <Flex
          className="items-center justify-center gap-1 w-full h-28 border-solid border-2 border-gray-400 rounded"
          direction="col"
        >
          {<CiSquareRemove className="text-3xl text-red-400" />}
          <h3 className="font-medium text-2xl">{100}</h3>
          <p className="text-grey">Deleted</p>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default TicketsStatistics;
