import { NumProps, StrProps } from "../types/app";

interface SearchItemsData {
  id: NumProps | StrProps;
  keyWord: StrProps;
  searchCount: NumProps;
}

export default SearchItemsData;
