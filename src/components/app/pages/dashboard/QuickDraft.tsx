import React, { FC, useEffect, useState } from "react";
import { VoidProps } from "../../../../dist/types/app";
import { fieldStyle } from "../../../../dist/variables/main";
import Button from "../../../build/Button";
import Flex from "../../../build/Flex";
import Input from "../../../build/Input";
import DdLogo from "../../private/DdLogo";
import { BiNotification, BiNotificationOff } from "react-icons/bi";
import { Action } from "./LatestTasks";
import Description from "../../private/Description";

const QuickDraft: FC = () => {
  const [titleDraft, setTitleDraft] = useState("");
  const [thoughtDraft, setThoughtDraft] = useState("");
  const [saved, setSaved] = useState(
    JSON.parse(`${localStorage.getItem("saved")}`) || false
  );
  const [action, setAction] = useState(false);
  const [draftsSaveDesc, setDraftsSaveDesc] = useState(false);
  const [draftsResetDesc, setDraftsResetDesc] = useState(false);
  const [save, setSave] = useState(
    JSON.parse(`${localStorage.getItem("save")}`) || false
  );

  function push(): VoidProps {
    localStorage.setItem("titleDraft", titleDraft);
    localStorage.setItem("thoughtDraft", thoughtDraft);
    setSaved(true);
    setAction(true);
  }

  function reset(): VoidProps {
    localStorage.removeItem("titleDraft");
    localStorage.removeItem("thoughtDraft");
    setTitleDraft("");
    setThoughtDraft("");
    setSaved(false);
    setAction(true);
  }

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    localStorage.setItem("save", JSON.stringify(save));
  }, [save]);

  return (
    <Flex className="relative gap-2" direction="col">
      <Flex className="items-center justify-between" direction="row">
        <DdLogo parent="Quick Draft" child="Write A Draft For Your Ideas" />
        <Flex
          className={`items-center gap-1 ${
            action && "mt-6"
          } text-sm font-bold dark:bg-white dark:text-black bg-dark text-white p-0.5 rounded cursor-default`}
          direction="row"
        >
          <p>S: {saved ? "Saved" : "Not Saved"}</p>
          {saved ? (
            <BiNotification className="text-lg" />
          ) : (
            <BiNotificationOff className="text-lg" />
          )}
        </Flex>
        {action && (
          <Action action="Action" text="changes Saved Successfully !" />
        )}
      </Flex>
      <Flex className="gap-2" direction="col">
        <Input
          onChange={(e) => {
            setTitleDraft(e.target.value);
            !saved && setAction(false);
          }}
          className="text-black"
          type="text"
          placeholder="Title"
          value={localStorage.getItem("titleDraft") as string}
        />
        <textarea
          onChange={(e) => {
            setThoughtDraft(e.target.value);
            !saved && setAction(false);
          }}
          className={fieldStyle}
          cols={30}
          rows={4}
          placeholder="Your Thought"
          value={localStorage.getItem("thoughtDraft") as string}
        ></textarea>
      </Flex>
      <Flex className="w-full justify-end items-end gap-4" direction="row">
        {saved && (
          <Button
            onClick={() => {
              reset();
              setSave(false);
            }}
            className="relative dark:bg-blue-400 bg-red-300 text-white dark:text-black px-2 py-0.5 rounded focus:animate-clicking"
            onMouseEnter={() => setDraftsResetDesc(true)}
            onMouseLeave={() => setDraftsResetDesc(false)}
          >
            <p>Reset</p>
            <Description
              text="Reset Draft"
              action={draftsResetDesc}
              useCenter={false}
            />
          </Button>
        )}
        {!save && (
          <Button
            onClick={() => {
              push();
              setSave(true);
            }}
            className="relative dark:bg-blue-400 bg-red-300 text-white dark:text-black px-2 py-0.5 rounded focus:animate-clicking"
            onMouseEnter={() => setDraftsSaveDesc(true)}
            onMouseLeave={() => setDraftsSaveDesc(false)}
          >
            <p>Save</p>
            <Description
              text="Save Draft"
              action={draftsSaveDesc}
              useCenter={false}
            />
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default QuickDraft;
