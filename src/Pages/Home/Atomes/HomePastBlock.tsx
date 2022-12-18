import React from "react";

export interface IHomePastBlock {
  id?: string;
  Name?: string;
  Job?: string;
  Link?: string;
  Picture?: string;
  Stackes?:any
}

export const HomePastBlock = (params: IHomePastBlock) => {
  return (
    <div className="HomePastBlock" id={params.id}>
      <div className="HomePastBlock_Picture-Job">
        <div className="HomePastBlock_Picture">
          <img src={params.Picture} alt="Картинка" />
        </div>
        <div className="HomePastBlock_Job">{params.Job}</div>
      </div>
      <div className="HomePastBlock_Name">{params.Name}</div>
      <div className="HomePastBlock_Stackes">{params.Stackes.map((e:any) => (
        <div className="HomePastBlock_Stackes-Stacke">
            {e}
        </div>
      ))}</div>

    </div>
  );
};
