import React, { FC, useState } from "react";
import Div from "../../../build/Div";
import next from "../../../../imgs/protected/next.png";
import welcome from "../../../../imgs/dashboard/welcome.png";
import Flex from "../../../build/Flex";
import Grid from "../../../build/Grid";
import { Link } from "react-router-dom";
import DdLogo from "../../private/DdLogo";
import Description from "../../private/Description";

const Welcome: FC = () => {
  const [profileDesc, setProfileDesc] = useState(false);

  return (
    <Flex className="gap-6" direction="col">
      <Flex
        className="w-full justify-between bg-white p-0.5 rounded"
        direction="row"
      >
        <Flex className="gap-4 dark:text-dark" direction="col">
          <DdLogo parent="Welcome" child="User" />
          <Div>
            <img className="w-12 h-12 rounded-full" src={next} alt="user-png" />
          </Div>
        </Flex>
        <Div>
          <img className="hidden lg:block w-60 h-32" src={welcome} alt="" />
        </Div>
      </Flex>
      <Grid className="place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Flex className="items-center" direction="col">
          <p>User</p>
          <p className="text-grey">Developer</p>
        </Flex>
        <Flex className="items-center" direction="col">
          <p>{80}</p>
          <p className="text-grey">Projects</p>
        </Flex>
        <Flex className="items-center" direction="col">
          <p>${8500}</p>
          <p className="text-grey">Earned</p>
        </Flex>
      </Grid>
      <Flex className="w-full justify-end items-end" direction="row">
        <Link
          className="relative dark:bg-blue-400 bg-red-300 text-white dark:text-black px-2 py-0.5 rounded focus:animate-clicking"
          to={"profile"}
          onMouseEnter={() => setProfileDesc(true)}
          onMouseLeave={() => setProfileDesc(false)}
        >
          <p>Profile</p>
          <Description
            text="Your Profile"
            action={profileDesc}
            useCenter={false}
          />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Welcome;
