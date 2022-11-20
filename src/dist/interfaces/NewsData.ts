import { NumProps, StrProps } from "../types/app";

interface NewsProps {
  id: NumProps | StrProps;
  src: StrProps;
  title: StrProps;
  firstText: StrProps;
  secondText: StrProps;
}

export default NewsProps;
