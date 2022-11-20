import React, { FC } from "react";
import Div from "../../build/Div";
import Flex from "../../build/Flex";
import next from "../../../imgs/protected/next.png";
import { IoMdNotificationsOutline } from "react-icons/io";

const Main: FC = () => {
  return (
    <Flex className="justify-between items-center" direction="row">
      <Div>
        <input
          className="w-24 focus:w-full sm:w-full px-4 py-1 border-none outline-none rounded shadow-md shadow-gray-400 dark:shadow-none duration-500"
          type="text"
          placeholder="Search..."
        />
      </Div>
      <Flex className="items-center gap-2" direction="row">
        {
          <IoMdNotificationsOutline className="w-6 h-6 cursor-pointer dark:text-light" />
        }
        <img
          className="w-8 h-8 rounded-full cursor-pointer"
          src={next}
          alt=""
        />
      </Flex>
    </Flex>
  );
};

export default Main;
