import React from "react";
import { Link } from "react-router-dom";
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
  console.log("params.indexlink", params.indexlink);
  const closeSideBar = () => {
    setmenuBurger(false)
  }
  return (
    <>
      {params.link == "/User" ? (
        <Link
          className={`${params.class} HeaderNav`}
          to={params.link}
          key={params.indexlink}
          onClick={closeSideBar}
          style={params.authorization == false ? { display: "none" } : {}}
        >
          {params.text}
        </Link>
      ) : params.link == "/Login" ? (
        <Link
          className={`${params.class} HeaderNav`}
          onClick={closeSideBar}
          to={params.link}
          key={params.indexlink}
          style={params.authorization == false ? {} : { display: "none" }}
        >
          {params.text}
        </Link>
      ) : (
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
