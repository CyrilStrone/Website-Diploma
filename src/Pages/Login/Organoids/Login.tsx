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

 
  const soldCheckbox = () => {
    
    }
  return (
    <>
      <div className={`Login`}>
      <div className="Login_Block">
        <div className="Login_Block-Title">
        Вход
        </div>
        <div className="Login_Block-Mail">
        <input type="email" value="Email"/>

        </div>
        <div className="Login_Block-Password">
          <input type="password" value="Пароль"/>
        <Link className="Login_Block-Password_Forgot" to={"/Forgot"}>Забыли?</Link>

        </div>
        <div className="Login_Block-Check">
        <input type="checkbox"  onChange={soldCheckbox} />
        Запомнить меня
        </div>
        <Link to={"/User"}  onClick={handleClick}>Login</Link>
        <Link to={"/Registration"}>Registration</Link>
      </div>
      </div>
      
      
    </>
  );
};
