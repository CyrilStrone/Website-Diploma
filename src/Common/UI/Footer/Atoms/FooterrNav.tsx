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
    //style={params.authorization ? {display:"none"}:{}
    <Link to={params.link} key={params.indexlink} className={`${params.class} FooterNav`} >
      
          {params.text}
  
      
    </Link>
  );
};
