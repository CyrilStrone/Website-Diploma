import React from "react";
import { Link } from "react-router-dom";

export interface IFooterlogo {
  id?: string;
  class?: string;
  link?: string;
  indexlink?: string;
  img?: string
}
export const Footerlogo = (params: IFooterlogo) => {
  return (
    <Link to={params.link} key={params.indexlink}>
      {
        <div className={`${params.class} Footerlogo`} >
          <img src={params.img} alt="Картинка" />
        </div>
      }
    </Link>
  );
};
