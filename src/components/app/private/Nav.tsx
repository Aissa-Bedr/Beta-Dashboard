import React, { FC } from "react";
import { Link } from "react-router-dom";
import Div from "../../build/Div";
import Flex from "../../build/Flex";
import { MdOutlineSpaceDashboard, MdSchool } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { BiGitBranch, BiUserCircle } from "react-icons/bi";
import { BsFileCode } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { linkStyle, liStyle } from "../../../dist/variables/main";

const Nav: FC = () => {
  return (
    <Flex className="gap-4" direction="col">
      <Div>
        <h3 className="font-medium text-2xl text-center text-dark dark:text-light">
          Elzero
        </h3>
      </Div>
      <Div>
        <ul className="flex flex-col items-center justify-center sm:items-start sm:justify-start gap-2 mt-4">
          <li>
            <Link className={liStyle} to={"/"}>
              {<MdOutlineSpaceDashboard />}
              <p className={linkStyle}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link className={liStyle} to={"/settings"}>
              {<IoMdSettings />}
              <p className={linkStyle}>Settings</p>
            </Link>
          </li>
          <li>
            <Link className={liStyle} to={"/profile"}>
              {<CiUser />}
              <p className={linkStyle}>Profile</p>
            </Link>
          </li>
          <li>
            <Link className={liStyle} to={"/projects"}>
              {<BiGitBranch />}
              <p className={linkStyle}>Projects</p>
            </Link>
          </li>
          <li>
            <Link className={liStyle} to={"/courses"}>
              {<MdSchool />}
              <p className={linkStyle}>Courses</p>
            </Link>
          </li>
          <li>
            <Link className={liStyle} to={"/friends"}>
              {<BiUserCircle />}
              <p className={linkStyle}>Friends</p>
            </Link>
          </li>
          <li>
            <Link className={liStyle} to={"/files"}>
              {<BsFileCode />}
              <p className={linkStyle}>Files</p>
            </Link>
          </li>
          <li>
            <Link className={liStyle} to={"/plans"}>
              {<TbReportMoney />}
              <p className={linkStyle}>Plans</p>
            </Link>
          </li>
        </ul>
      </Div>
    </Flex>
  );
};

export default Nav;
