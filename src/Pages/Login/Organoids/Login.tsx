import { useStore } from "effector-react";
// import { PagesLogin } from "../../Routes";
import React from "react";
import { Link } from "react-router-dom";
import {
  $userAuthorization,
  setuserAuthorization,
} from "../../../Common/hooks";
import "../Styles/Login.css";

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
export const Login = () => {
  const userAuthorization = useStore($userAuthorization);

  let handleClick = () => {
    if (userAuthorization) {
      setuserAuthorization(false);
    } else {
      setuserAuthorization(true);
    }
  };

  return (
    <>
      <div className={`Login`}>
        <Link to={"/User"}  onClick={handleClick}>Login</Link>
        <Link to={"/Forgot"}>Forgot your password ?</Link>
        <Link to={"/Registration"}>Registration</Link>
      </div>
      
      
    </>
  );
};
