import React, { FC } from "react";
import Div from "../../../build/Div";
import Flex from "../../../build/Flex";
import DdLogo from "../../private/DdLogo";
import Grid from "../../../build/Grid";
import NewsProps from "../../../../dist/interfaces/NewsData";
import newsData from "../../../../dist/data/newsData";

const News: FC<NewsProps> = ({ src, title, firstText, secondText }) => {
  return (
    <Flex className="w-full flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-between">
      <Flex
        className="items-center justify-center md:items-start md:justify-start gap-0 md:gap-4"
        direction="row"
      >
        <Div className="flex items-center justify-center">
          <img className="hidden md:block w-24 h-12 rounded" src={src} alt="" />
        </Div>
        <Flex direction="col">
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-grey text-md">{firstText}</p>
        </Flex>
      </Flex>
      <Div>
        <p className="font-medium text-sm">{secondText}</p>
      </Div>
    </Flex>
  );
};

const LatestNews: FC = () => {
  const items = newsData.map((item) => <News key={item.id} {...item} />);

  return (
    <Flex className="gap-4" direction="col">
      <Div>
        <DdLogo parent="Latest News" />
      </Div>
      <Grid className="gap-8" cols={1}>
        {items}
      </Grid>
    </Flex>
  );
};

export default LatestNews;
