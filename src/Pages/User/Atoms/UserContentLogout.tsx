import { useStore } from "effector-react";
import React from "react";
import { $userAuthorization, setuserAuthorization } from "../../../Common/hooks";

export interface IUserContentLogout {
    id?: string;
    class?: string;
    authorization?: boolean;
    typeBlock?:string;
  }
export const UserContentLogout = (params:IUserContentLogout) => {
  const userAuthorization = useStore($userAuthorization);
  
  let handleClick = () => {
    if(userAuthorization){
      setuserAuthorization(false)
    }else{
      setuserAuthorization(true)
    }
    
  }
   
    
    
  return (
   
      
         <button  className={`UserContentLogout_Buttom`} onClick={handleClick}>
            {
              userAuthorization ? 
              <a>Выход</a>
              :
              <a>Вход</a>
            }
            
            
        </button>
      
       
  );
};



