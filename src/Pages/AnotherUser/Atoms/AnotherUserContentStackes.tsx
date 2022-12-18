import { useStore } from "effector-react";
import React from "react";
// import { Link } from "react-router-dom";
import { $userStackes } from "../../../Common/hooks";

export interface IAnotherUserContentStackes {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const AnotherUserContentStackes = (params: IAnotherUserContentStackes) => {
  const AnotherUserStackes = useStore($userStackes);
  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>

  //   </Link>
  // };

  return (
    <>
      <div className="AnotherUserContent_StackesAnotherUser_Title">
        Стэк
      </div>
      <div className="AnotherUserContent_StackesAnotherUser_Stackes">
      {AnotherUserStackes.map((e, i) => (
        <div className="AnotherUserContent_StackesAnotherUser_Stacke">{e}</div>
      ))}
      </div>
    </>
  );
};
