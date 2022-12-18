import { useStore } from "effector-react";
import React from "react";
// import { Link } from "react-router-dom";
import {  $userPicture } from "../../../Common/hooks";

export interface IAnotherUserContentPicture {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const AnotherUserContentPicture = (params: IAnotherUserContentPicture) => {
  const AnotherUserPicture = useStore($userPicture);
  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>
  
  //   </Link>
  // };
 

  return (
    <>
     <div className="AnotherUserContentPicture_Picture">
     <img src={AnotherUserPicture} alt="Картинка" />

     </div>
    </>
    
  );
};
