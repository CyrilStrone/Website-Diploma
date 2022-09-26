import { useStore } from "effector-react";
import React from "react";
import { $usersPastTop } from "../../../Common/hooksHome";
import { HomePastBlock, IHomePastBlock } from "../Atomes/HomePastBlock";

export const HomePast = () => {
  // require('./index.styl')
  const usersPastTop = useStore($usersPastTop);


  let HomePastArray:IHomePastBlock[] = [];
usersPastTop.map((e:any)=>{
  HomePastArray.push({ Picture: e.picture, Name: e.name,Job:e.job},)
})
  return (
    <div className="HomePast">
     {
      HomePastArray.map((e, i) => (
        <HomePastBlock Picture={e.Picture} Name={e.Name} Job={e.Job}/>
      ))
     }
    </div>
  );
};
