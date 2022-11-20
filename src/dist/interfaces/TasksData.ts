import { BoolProps, NumProps, StrProps, VoidProps } from "../types/app";

interface TaskProps {
  id: NumProps | StrProps;
  title: StrProps;
  text: StrProps;
  removed: BoolProps;
}

export default TaskProps;
