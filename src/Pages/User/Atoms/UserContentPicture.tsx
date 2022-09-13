import React from "react";

export interface IUserContentPicture {
    id?: string;
    class?: string;
    authorization?: boolean;
    typeBlock?:string;
  }
export const UserContentPicture = (params: IUserContentPicture) => {

   
    
    
  return (
   
      
        <div className={`${params.class} UserContentPicture`} style={params.authorization ? {}:{display:"none"}}>
            
            
            
        </div>
  );
};



