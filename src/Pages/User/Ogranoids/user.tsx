import { useStore } from "effector-react";
import React from "react";
import { $userAuthorization } from "../../../Common/hooks";
import { UserContentLogout } from "../Atoms/UserContentLogout";
// import {  IHeaderNav } from "../Atoms/HeaderNav";
// import { Pages } from '../../Routes'
// import { $userAuthorization } from "../../../Common/hooks";
// import {useStore} from "effector-react";
import { IUserContent, UserContent } from "../Molecules/UserContent";
import "../Styles/User.css";

export const User = () => {
  const userAuthorization = useStore($userAuthorization);

  const UserContentArray: IUserContent[] = [
    { class: "UserContent_PictureUser" },
    { class: "UserContent_JobUser" },
    { class: "UserContent_StackeUser" },
    { class: "UserContent_ShortDescriptionUser" },
    { class: "UserContent_FullDescriptionUser" },
    { class: "UserContent_SocialNetworksUser" },
    { class: "UserContent_LogoutUser" ,Component:<UserContentLogout/>},
  ];
  const UserContentArrayNoAuthorization: IUserContent[] = [
    { class: "UserContent_Authorization" ,Component:<UserContentLogout/>},
  ];

  return (
    <div className={`User`}>
      <div className={`User_Contents`}>
        {userAuthorization
          ? UserContentArray.map((e, i) => <UserContent class={e.class} Component={e.Component}/>)
          : UserContentArrayNoAuthorization.map((e, i) => (
              <UserContent class={e.class} Component={e.Component}/>
            ))}
      </div>
    </div>
  );
};
