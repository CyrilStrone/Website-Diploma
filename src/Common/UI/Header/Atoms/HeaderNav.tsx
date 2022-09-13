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
    //style={params.authorization ? {display:"none"}:{}
    <Link className={`${params.class} HeaderNav`}  to={params.link} key={params.indexlink}>
      
        
          {params.text}
       
      
    </Link>
  );
};
