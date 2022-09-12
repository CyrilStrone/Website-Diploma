import React from "react";
import { Link } from "react-router-dom";

export interface IFooterNav {
  id?: string;
  text?: string;
  value?: string;
  class?: string;
  authorization?: boolean;
  link?: string;
  indexlink?: string;
}

export const FooterNav = (params: IFooterNav) => {
  return (
    <Link to={params.link} key={params.indexlink}>
      {
        <div className={`${params.class} FooterNav`} style={params.authorization ? {display:"none"}:{}}>
          {params.text}
        </div>
      }
    </Link>
  );
};
