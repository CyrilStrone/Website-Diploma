import { useStore } from "effector-react";
import React from "react";
import { Link } from "react-router-dom";
import { $userTopHomeName } from "../../../../../src/Common/hooksHome";
import { setmenuBurger } from "../../../../../src/Common/hooks";

export interface IHeaderNav {
  id?: string;
  text?: string;
  value?: string;
  class?: string;
  authorization?: boolean;
  link?: string;
  indexlink?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const HeaderNav = (params: IHeaderNav) => {
  const closeSideBar = () => {
    setmenuBurger(false)
  }
  const userTopHomeName = useStore($userTopHomeName);
console.log(params.link)
  return (
    <>
      {params.link == "User" ? (
        <Link
          className={`${params.class} HeaderNav`}
          to={params.link}
          key={params.indexlink}
          onClick={closeSideBar}
          style={params.authorization == false ? { display: "none" } : {}}
        >
          {userTopHomeName}
        </Link>
      ) : params.link == "Login" ? (
        <Link
          className={`${params.class} HeaderNav`}
          onClick={closeSideBar}
          to={params.link}
          key={params.indexlink}
          style={params.authorization == false ? {} : { display: "none" }}
        >
          {params.text}
        </Link>
      ) :  params.link == "Forgot" ? (
        <Link
          className={`${params.class} HeaderNav`}
          onClick={closeSideBar}
          to={params.link}
          key={params.indexlink}
          style={ {display: "none"} }
        >
          {params.text}
        </Link>
      ):(
        <Link
          className={`${params.class} HeaderNav`}
          onClick={closeSideBar}
          to={params.link}
          key={params.indexlink}
        >
          {params.text}
        </Link>
      )}
    </>
  );
};
