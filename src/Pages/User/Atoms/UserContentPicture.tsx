import { useStore } from "effector-react";
import React from "react";
// import { Link } from "react-router-dom";
import { $userName, $userPicture } from "../../../Common/hooks";

export interface IUserContentPicture {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const UserContentPicture = (params: IUserContentPicture) => {
  const userPicture = useStore($userPicture);
  const userName = useStore($userName);
  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>
  
  //   </Link>
  // };
 

  return (
    <>
     <div className="UserContentPicture_Picture">
     <img src={userPicture} alt="Картинка" />

     </div>
    <div className="UserContentPicture_Name">
      {userName}
    </div>
    </>
    
  );
};
