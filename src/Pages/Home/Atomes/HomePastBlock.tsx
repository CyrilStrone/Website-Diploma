import React from "react";
import { useNavigate } from "react-router-dom";
import { setAnotheUserId } from "../../../Common/hooksAnotherUser";

export interface IHomePastBlock {
  id?: number;
  Name?: string;
  Job?: string;
  Link?: string;
  Picture?: string;
  Stackes?:any;
  onClick?: () => void;
}

export const HomePastBlock = (params: IHomePastBlock) => {
  let navigate = useNavigate(); 
  let handleClick = (e:any) => {
    setAnotheUserId(Number(e))
      navigate("/AnotherUser");
  };
  return (
    <div className="HomePastBlock" id={params.id.toString()} onClick={()=>handleClick(params.id)}>
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
