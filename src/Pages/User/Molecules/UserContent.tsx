import { useStore } from "effector-react";
import React from "react";
import { Link } from "react-router-dom";
import { $userAuthorization, setuserAuthorization } from "src/Common/hooks";

export interface IUserContent {
  id?: string;
  class?: string;
  authorization?: boolean;
  typeBlock?: string;
  Component?: JSX.Element;
}
export const UserContent = (params: IUserContent) => {
  const userAuthorization = useStore($userAuthorization);

  let handleClick = () => {
    if (userAuthorization) {
      setuserAuthorization(false);
    } else {
      setuserAuthorization(true);
    }
  };

  return (
    <div>
      <div className={`${params.class} UserContent`}>{params.Component}</div>
      <button className={`UserContentLogout_Buttom`} onClick={handleClick}>
        {userAuthorization ? <Link to={"/Login"}>Выход</Link> : <a>Вход</a>}
      </button>
    </div>
  );
};
