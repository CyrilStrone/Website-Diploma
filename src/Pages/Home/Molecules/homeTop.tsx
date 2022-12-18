import React from "react";
import {  useNavigate } from "react-router-dom";
import { setAnotheUserId } from "../../../../src/Common/hooksAnotherUser";
import { HomeTopInfo } from "../Atomes/HomeTopInfo";
import { HomeTopPicture } from "../Atomes/HomeTopPicture";

export const HomeTop = () => {
  let navigate = useNavigate(); 
  let handleClick = () => {
      setAnotheUserId(123)
      navigate("/AnotherUser");
  };
  
  return (
    <div className="HomeTop" onClick={()=>handleClick()}>
      <div className="HomeTop_Top">
      <HomeTopPicture/>
      <HomeTopInfo/>
      </div>
    </div>
  );
};
