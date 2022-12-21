import { useStore } from "effector-react";
import React from "react";
// import { Link } from "react-router-dom";
import {  $userSocialNetworks } from "../../../Common/hooks";

export interface IAnotherUserContentSocialNetworks {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const AnotherUserContentSocialNetworks = (params: IAnotherUserContentSocialNetworks) => {
  const AnotherUserSocialNetworks = useStore($userSocialNetworks);
  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>

  //   </Link>
  // };

  return (
    <>
    {AnotherUserSocialNetworks.map((e,i)=><div className="AnotherUserContent_SocialNetworksAnotherUser_Network">{e}</div>)}

    
   </>
  );
};
