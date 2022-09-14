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
    <>
      {params.link == "/User" ? (
        <Link
          className={`${params.class} FooterNav`}
          to={params.link}
          key={params.indexlink}
          style={params.authorization == false ? { display: "none" } : {}}
        >
          {params.text}
        </Link>
      ) : params.link == "/Login" ? (
        <Link
          className={`${params.class} FooterNav`}
          to={params.link}
          key={params.indexlink}
          style={params.authorization == false ? {} : { display: "none" }}
        >
          {params.text}
        </Link>
      ) : (
        <Link
          className={`${params.class} FooterNav`}
          to={params.link}
          key={params.indexlink}
        >
          {params.text}
        </Link>
      )}
    </>
  );
};
