import React, { FC, useEffect, useState } from "react";
import Div from "../../../build/Div";
import Flex from "../../../build/Flex";
import DdLogo from "../../private/DdLogo";
import { BiTrash } from "react-icons/bi";
import { TfiReload } from "react-icons/tfi";
import { MdOutlineDangerous } from "react-icons/md";
import { CgEreader } from "react-icons/cg";
import { TbEdit } from "react-icons/tb";
import Grid from "../../../build/Grid";
import TasksData from "../../../../dist/interfaces/TasksData";
import tasksData from "../../../../dist/data/tasksData";
import { NumProps, StrProps, VoidProps } from "../../../../dist/types/app";
import Button from "../../../build/Button";
import Input from "../../../build/Input";
import Description from "../../private/Description";

interface DataTasks extends TasksData {
  removeTask: (id: StrProps | NumProps) => VoidProps;
  reloadTask: (id: StrProps | NumProps) => VoidProps;
  moveToTrash: (id: StrProps | NumProps) => VoidProps;
}

const Task: FC<DataTasks> = ({
  id,
  title,
  text,
  removed,
  removeTask,
  reloadTask,
  moveToTrash,
}) => {
  const [finishTaskDesc, setFinishTaskDesc] = useState(false);
  const [reloadTaskDesc, setReloadTaskDesc] = useState(false);
  const [removeTaskDesc, setRemoveTaskDesc] = useState(false);

  return (
    <Flex className="w-full justify-between items-center" direction="row">
      <Div>
        <h3 className={`font-bold text-lg ${removed && "line-through"}`}>
          {title}
        </h3>
        <p className={`text-sm text-grey ${removed && "line-through"}`}>
          {text}
        </p>
      </Div>
      <Flex className="gap-2" direction="row">
        {
          <button
            className={`relative ${!removed && "focus:animate-clicking"}`}
            onMouseEnter={() => setFinishTaskDesc(true)}
            onMouseLeave={() => setFinishTaskDesc(false)}
          >
            <BiTrash
              onClick={() => removeTask(id)}
              className={`text-xl ${
                removed ? "text-grey" : "hover:text-red-400 duration-500"
              } cursor-pointer`}
            />
            {!removed && (
              <Description
                text="Finish Task"
                action={finishTaskDesc}
                useCenter={false}
              />
            )}
          </button>
        }
        {
          <button
            className="relative focus:animate-clicking"
            onMouseEnter={() => setReloadTaskDesc(true)}
            onMouseLeave={() => setReloadTaskDesc(false)}
          >
            <TfiReload
              onClick={() => reloadTask(id)}
              className={`text-xl hover:text-blue-400 duration-500 cursor-pointer ${
                removed ? "block" : "hidden"
              }`}
            />
            <Description
              text="Reload Task"
              action={reloadTaskDesc}
              useCenter={false}
            />
          </button>
        }
        {
          <button
            className="relative focus:animate-clicking"
            onMouseEnter={() => setRemoveTaskDesc(true)}
            onMouseLeave={() => setRemoveTaskDesc(false)}
          >
            <MdOutlineDangerous
              onClick={() => moveToTrash(id)}
              className={`text-2xl hover:text-yellow-500 duration-500 cursor-pointer ${
                removed ? "block" : "hidden"
              }`}
            />
            <Description
              text="Remove Task"
              action={removeTaskDesc}
              useCenter={false}
            />
          </button>
        }
      </Flex>
    </Flex>
  );
};

interface ActionProps {
  text: StrProps;
  action: StrProps;
}

export const Action: FC<ActionProps> = ({ text, action }) => {
  return (
    <Flex
      className={`absolute right-0 top-0 gap-1 items-center text-center text-sm font-bold dark:bg-white bg-dark dark:text-dark text-white p-0.5 rounded`}
      direction="row"
    >
      <span
        className={`bg-white dark:bg-dark ${
          action === "Error"
            ? "text-dark dark:text-white"
            : "text-dark dark:text-white"
        } p-0.5 rounded`}
      >
        {action}:
      </span>
      <p>{text}</p>
    </Flex>
  );
};

const LatestTasks: FC = () => {
  const [dataTasks, setDataTasks] = useState<TasksData[]>(
    JSON.parse(`${localStorage.getItem("dataTasks")}`) || tasksData
  );

  const [tasksMode, setTasksMode] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskText, setTaskText] = useState("");
  const [emptyError, setEmptyError] = useState(false);
  const [action, setAction] = useState(false);
  const [actionText, setActionText] = useState("");

  const [addTaskDesc, setAddTaskDesc] = useState(false);
  const [backToReadModeDesc, setBackToReadModeDesc] = useState(false);
  const [goToEditModeDesc, setGoToEditModeDesc] = useState(false);

  const tasks = dataTasks.map((task) => (
    <Task
      removeTask={() => removeTask(task.id)}
      reloadTask={() => reloadTask(task.id)}
      moveToTrash={() => moveToTrash(task.id)}
      key={task.id}
      {...task}
    />
  ));

  function removeTask(id: StrProps | NumProps): VoidProps {
    setDataTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, removed: true } : task
      )
    );

    setActionText("Task Finished Successfully !");
    setAction(true);
  }

  function reloadTask(id: StrProps | NumProps): VoidProps {
    setDataTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, removed: false } : task
      )
    );

    setActionText("Task Reloaded Successfully !");
    setAction(true);
  }

  function addTask(): VoidProps {
    const newTask: TasksData = {
      id: dataTasks.length + 1,
      title: taskTitle,
      text: taskText,
      removed: false,
    };

    const check = taskTitle !== "" && taskText !== "";

    if (check) {
      setDataTasks((prevTasks) => [...prevTasks, newTask]);
      setEmptyError(false);
      setAction(true);
    }
    if (!check) {
      setAction(false);
      setEmptyError(true);
    }
  }

  function removeValueOfInputs(): VoidProps {
    const titleInput = document.getElementById(
      "title-task-input"
    ) as HTMLInputElement;
    const textInput = document.getElementById(
      "text-task-input"
    ) as HTMLInputElement;

    titleInput.value = "";
    textInput.value = "";
    setTaskTitle("");
    setTaskText("");
  }

  function moveToTrash(id: StrProps | NumProps): VoidProps {
    setDataTasks((prevTasks) =>
      prevTasks.filter((task) => (task.id === id ? !task : task))
    );

    setActionText("Task Removed Successfully !");
    setAction(true);
  }

  useEffect(() => {
    localStorage.setItem("dataTasks", JSON.stringify(dataTasks));
  }, [dataTasks]);

  if (tasksMode) {
    return (
      <Flex className="relative gap-4" direction="col">
        <Div>
          <Flex className="items-center justify-between" direction="row">
            <DdLogo parent="Add Tasks" />
            {!emptyError && (
              <Flex
                className="items-center gap-1 text-sm font-bold dark:bg-white dark:text-black bg-dark text-white p-0.5 rounded cursor-default"
                direction="row"
              >
                <p>M: Edit</p>
                {<TbEdit />}
              </Flex>
            )}
          </Flex>
          <Grid className="mt-4 gap-4" cols={1}>
            <Input
              onChange={(e) => {
                setTaskTitle(e.target.value);
                setAction(false);
                setEmptyError(false);
              }}
              id="title-task-input"
              className="text-black"
              type="text"
              placeholder="Task Title"
              value={taskTitle}
            />
            <Input
              onChange={(e) => {
                setTaskText(e.target.value);
                setAction(false);
                setEmptyError(false);
              }}
              id="text-task-input"
              className="text-black"
              type="text"
              placeholder="Task Text"
              value={taskText}
            />
            <Button
              onClick={() => {
                addTask();
                removeValueOfInputs();
              }}
              className="relative text-white bg-purple-400 focus:animate-clicking"
              onMouseEnter={() => setAddTaskDesc(true)}
              onMouseLeave={() => setAddTaskDesc(false)}
            >
              <p>Add</p>
              <Description
                text="add new Task"
                action={addTaskDesc}
                useCenter={false}
              />
            </Button>
            {emptyError && <Action text="it Can't Be Empty !" action="Error" />}
            {action && (
              <Action text="Task Added Successfully !" action="Action" />
            )}
          </Grid>
          <Flex className="mt-32 items-center justify-center" direction="row">
            <Button
              onClick={() => {
                setTasksMode(false);
                setEmptyError(false);
                setAction(false);
                setGoToEditModeDesc(false);
                setBackToReadModeDesc(false);
              }}
              className="relative text-white dark:text-black dark:bg-blue-400 bg-red-300 focus:animate-clicking"
              onMouseEnter={() => setBackToReadModeDesc(true)}
              onMouseLeave={() => setBackToReadModeDesc(false)}
            >
              <p>Back</p>
              <Description
                text="Back To Tasks"
                action={backToReadModeDesc}
                useCenter={true}
              />
            </Button>
          </Flex>
        </Div>
      </Flex>
    );
  }

  if (dataTasks.length <= 0) {
    return (
      <Flex className="relative gap-4" direction="col">
        <Div className="w-full">
          <Flex className="items-center justify-between" direction="row">
            <DdLogo parent="Latest Tasks" />
            {!action && (
              <Flex
                className="items-center gap-1 text-sm font-bold dark:bg-white dark:text-black bg-dark text-white p-0.5 rounded cursor-default"
                direction="row"
              >
                <p>M: Read</p>
                {<CgEreader />}
              </Flex>
            )}
          </Flex>
          <Div className="text-center font-bold my-4 dark:bg-blue-400 bg-red-300 px-4 py-1 rounded">
            No Tasks To Show !
          </Div>
          <Flex className="items-center justify-center" direction="row">
            <Button
              onClick={() => {
                setEmptyError(false);
                setTasksMode(true);
                setAction(false);
              }}
              className="relative text-white dark:text-black dark:bg-blue-400 bg-red-300 focus:animate-clicking"
              onMouseEnter={() => setGoToEditModeDesc(true)}
              onMouseLeave={() => setGoToEditModeDesc(false)}
            >
              <p>add Tasks</p>
              <Description
                text="Go To M: Edit"
                action={goToEditModeDesc}
                useCenter={true}
              />
            </Button>
          </Flex>
        </Div>
      </Flex>
    );
  }

  return (
    <Flex className="relative gap-4" direction="col">
      <Div>
        <Flex className="items-center justify-between" direction="row">
          <DdLogo parent="Latest Tasks" />
          {!action && (
            <Flex
              className="items-center gap-1 text-sm font-bold dark:bg-white dark:text-black bg-dark text-white p-0.5 rounded cursor-default"
              direction="row"
            >
              <p>M: Read</p>
              {<CgEreader />}
            </Flex>
          )}
        </Flex>
        {action && <Action text={actionText} action="Action" />}
        <Grid className="mt-4 gap-4" cols={1}>
          {tasks}
        </Grid>
        <Flex className="items-center justify-center" direction="row">
          <Button
            onClick={() => {
              setEmptyError(false);
              setTasksMode(true);
              setAction(false);
              setGoToEditModeDesc(false);
              setBackToReadModeDesc(false);
            }}
            className="relative text-white dark:text-black dark:bg-blue-400 bg-red-300 focus:animate-clicking"
            onMouseEnter={() => setGoToEditModeDesc(true)}
            onMouseLeave={() => setGoToEditModeDesc(false)}
          >
            <p>add Tasks</p>
            <Description
              text="Go To M: Edit"
              action={goToEditModeDesc}
              useCenter={true}
            />
          </Button>
        </Flex>
      </Div>
    </Flex>
  );
};

export default LatestTasks;
