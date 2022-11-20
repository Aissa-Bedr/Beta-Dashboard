import React, { FC } from "react";
import searchItemsData from "../../../../dist/data/searchItemsData";
import SearchItemsData from "../../../../dist/interfaces/SearchItemsData";
import { NumProps, StrProps } from "../../../../dist/types/app";
import Div from "../../../build/Div";
import Flex from "../../../build/Flex";
import DdLogo from "../../private/DdLogo";

const SearchItems: FC<SearchItemsData> = ({ keyWord, searchCount }) => {
  return (
    <Flex className="items-center justify-between" direction="row">
      <Div>
        <h3>{keyWord}</h3>
      </Div>
      <Div>
        <h3>{searchCount}</h3>
      </Div>
    </Flex>
  );
};

const TopSearchItems: FC = () => {
  const items = searchItemsData.map((item) => (
    <SearchItems key={item.id} {...item} />
  ));

  return (
    <Flex className="w-full gap-4" direction="col">
      <DdLogo parent="Top Search Items" />
      <Flex className="gap-4" direction="col">
        <Flex className="items-center justify-between" direction="row">
          <Div>
            <h3 className="text-lg font-medium text-grey">Keyword</h3>
          </Div>
          <Div>
            <h3 className="text-lg font-medium text-grey">Search Count</h3>
          </Div>
        </Flex>
        <Flex className="gap-4" direction="col">
          {items}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TopSearchItems;
