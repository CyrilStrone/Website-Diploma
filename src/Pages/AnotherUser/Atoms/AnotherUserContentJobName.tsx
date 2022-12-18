import { useStore } from "effector-react";
import React from "react";
// import { Link } from "react-router-dom";
import { $userJob, $userName, $userShortDescription } from "../../../Common/hooks";

export interface IAnotherUserContentJobName {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
}
export const AnotherUserContentJobName = (params: IAnotherUserContentJobName) => {
  const AnotherUserName = useStore($userName);
  const AnotherUserJob = useStore($userJob);
  const AnotherUserShortDescription = useStore($userShortDescription);

  // let handleClick = () => {
  //   <Link to={params.link} key={params.indexlink} className={`${params.class} Footerlogo`}>

  //   </Link>
  // };

  return (
    <><div className="AnotherUserContentJobName_NameAndJob">
      <div className="AnotherUserContentJobName_Name">{AnotherUserName}</div>
      <div className="AnotherUserContentJobName_Job">{AnotherUserJob}</div>
    </div>
    <div className="AnotherUserContentJobName_ShortDescription">{AnotherUserShortDescription}
    </div>
    </>
  );
};
