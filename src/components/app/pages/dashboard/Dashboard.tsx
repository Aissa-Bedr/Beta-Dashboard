import React, { FC } from "react";
import Div from "../../../build/Div";
import Flex from "../../../build/Flex";
import Grid from "../../../build/Grid";
import Base from "../../private/Base";
import Logo from "../../private/Logo";
import Main from "../../private/Main";
import Nav from "../../private/Nav";
import Scope from "../../private/Scope";
import LatestNews from "./LatestNews";
import LatestTasks from "./LatestTasks";
import QuickDraft from "./QuickDraft";
import TicketsStatistics from "./TicketsStatistics";
import TopSearchItems from "./TopSearchItems";
import Welcome from "./Welcome";
import YearlyTargets from "./YearlyTargets";

const Dashboard: FC = () => {
  return (
    <Base>
      <Flex className="items-center w-fit md:w-60 px-2 py-3" direction="col">
        <Nav />
      </Flex>
      <Div className="w-full h-full px-2 py-3">
        <Main />
        <Logo logoName="Dashboard" />
        <Grid className="gap-x-4 gap-y-8 grid-cols-1 lg:grid-cols-2">
          <Scope element={<Welcome />} />
          <Scope element={<QuickDraft />} />
          <Scope element={<YearlyTargets />} />
          <Scope element={<TicketsStatistics />} />
          <Scope element={<LatestNews />} />
          <Scope element={<LatestTasks />} />
          <Scope element={<TopSearchItems />} />
        </Grid>
      </Div>
    </Base>
  );
};

export default Dashboard;
