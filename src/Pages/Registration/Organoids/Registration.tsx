// import { useStore } from "effector-react";
// import { PagesLogin } from "../../Routes";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Registration.css";
// import { Link } from "react-router-dom";
// import {
//   $userAuthorization,
//   setuserAuthorization,
// } from "../../../Common/hooks";

// export interface ILoginArray {
//   id?: string;
//   text?: string;
//   value?: string;
//   class?: string;
//   authorization?: boolean;
//   link?: string;
//   indexlink?: string;
//   Component?:JSX.Element;
// }
export const Registration = () => {
  // const userAuthorization = useStore($userAuthorization);

  //   let handleClick = () => {
  //     if (userAuthorization) {
  //       setuserAuthorization(false);
  //     } else {
  //       setuserAuthorization(true);
  //     }
  //   };

  return (
    // <button className={`Login`} onClick={handleClick}>
    //   {userAuthorization ? <a>Выход</a> : <Link to={"/User"}>Вход</Link>}
    // </button>
    <div className="Registration">
      <Link to={"/Login"}>Назад</Link>
      <div>Йоу?</div>
    </div>
  );
};
