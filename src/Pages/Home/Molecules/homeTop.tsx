import React from "react";
import { HomeTopInfo } from "../Atomes/HomeTopInfo";
import { HomeTopPicture } from "../Atomes/HomeTopPicture";

export const HomeTop = () => {
  // require('./index.styl')

  return (
    <div className="HomeTop">
     <HomeTopPicture/>
     <HomeTopInfo/>
    </div>
  );
};
