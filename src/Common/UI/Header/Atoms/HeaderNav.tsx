import React from "react";
import { Link } from "react-router-dom";

export interface IHeaderNav {
  id?: string;
  text?: string;
  value?: string;
  class?: string;
  authorization?: boolean;
  link?: string;
  indexlink?: string;
}

export const HeaderNav = (params: IHeaderNav) => {
  return (
    <Link to={params.link} key={params.indexlink}>
      {
        <div className={`${params.class} HeaderNav`} style={params.authorization ? {display:"none"}:{}}>
          {params.text}
        </div>
      }
    </Link>
  );
};
