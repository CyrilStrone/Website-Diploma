import { useStore } from "effector-react";
import React from "react";
import { $userPicture } from "../../../Common/hooks";

export interface IAnotherUserContentPictureOnly {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const AnotherUserContentPictureOnly = (params: IAnotherUserContentPictureOnly) => {
  const AnotherUserPicture = useStore($userPicture);

  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>
  
  //   </Link>
  // };
 

  return (
    <div>
      <img src={AnotherUserPicture} alt="Картинка" />
    </div>
  );
};
