import React from "react";

export interface IHomePastBlock {
  id?: string;
  Name?:string;
  Job?:string;
  Link?:string;
  Picture?:string;
}

export const HomePastBlock = (params:IHomePastBlock) => {

  return (
    <div className="HomePastBlock" id={params.id}>
      <div className="HomePastBlock_Picture">
      <img src={params.Picture} alt="Картинка" /></div>
      <div className="HomePastBlock_Name">{params.Name}</div>
      <div className="HomePastBlock_Job">{params.Job}</div>
    </div>
  );
};
