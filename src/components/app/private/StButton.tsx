import React, { FC } from "react";
import { BoolProps } from "../../../dist/types/app";
import Div from "../../build/Div";
import Flex from "../../build/Flex";

interface SettingsProps {
  settingMode: BoolProps;
  setSettingMode: React.Dispatch<React.SetStateAction<BoolProps>>;
}

const StButton: FC<SettingsProps> = ({ settingMode, setSettingMode }) => {
  return (
    <Flex
      onClick={() => setSettingMode((prevState) => !prevState)}
      className={`relative items-center w-20 h-7 rounded-full ${
        settingMode ? "bg-blue-500" : "bg-blue-300"
      } cursor-pointer duration-500 transition-all`}
      direction="row"
    >
      <Div
        className={`absolute ${
          settingMode ? "right-1" : "left-1"
        } w-5 h-5 rounded-full bg-light`}
      ></Div>
    </Flex>
  );
};

export default StButton;
