import React, { FC, useState } from "react";
import { BoolProps } from "../../../../dist/types/app";
import Div from "../../../build/Div";
import Flex from "../../../build/Flex";
import Grid from "../../../build/Grid";
import Base from "../../private/Base";
import Logo from "../../private/Logo";
import Main from "../../private/Main";
import Nav from "../../private/Nav";
import StButton from "../../private/StButton";

interface SettingsProps {
  themeMode: BoolProps;
  setThemeMode: React.Dispatch<React.SetStateAction<BoolProps>>;
}

const Settings: FC<SettingsProps> = ({ themeMode, setThemeMode }) => {
  return (
    <Base>
      <Flex className="items-center w-fit md:w-60 px-2 py-3" direction="col">
        <Nav />
      </Flex>
      <Div className="w-full h-full px-2 py-3">
        <Main />
        <Logo logoName="Settings" />
        <Grid className="gap-4 grid-cols-1 lg:grid-cols-2">
          <Div className="bg-light p-2 rounded shadow-md shadow-gray-400 dark:bg-dark dark:shadow-none dark:text-light">
            <p>Theme Mode</p>
            <StButton settingMode={themeMode} setSettingMode={setThemeMode} />
          </Div>
          <Div className="bg-light p-2 rounded shadow-md shadow-gray-400 dark:bg-dark dark:shadow-none dark:text-light">
            <h3>Setting 1 !</h3>
            <h3>Setting 2 !</h3>
            <h3>Setting 3 !</h3>
          </Div>
          <Div className="bg-light p-2 rounded shadow-md shadow-gray-400 dark:bg-dark dark:shadow-none dark:text-light">
            <h3>Setting 1 !</h3>
            <h3>Setting 2 !</h3>
            <h3>Setting 3 !</h3>
          </Div>
          <Div className="bg-light p-2 rounded shadow-md shadow-gray-400 dark:bg-dark dark:shadow-none dark:text-light">
            <h3>Setting 1 !</h3>
            <h3>Setting 2 !</h3>
            <h3>Setting 3 !</h3>
          </Div>
        </Grid>
      </Div>
    </Base>
  );
};

export default Settings;
