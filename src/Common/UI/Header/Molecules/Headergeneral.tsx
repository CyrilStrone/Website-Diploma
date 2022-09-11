import React from "react";
import {  Headerlogo, IHeaderlogo } from "../Atoms/HeaderLogo";
// import {  IHeaderNav } from "../Atoms/HeaderNav";
import { Pages } from '../../../../Pages/Routes'
import { $userAuthorization } from "../../../hooks";
import {useStore} from "effector-react";
import ikit from '../../../Assets/Search/ikit.jpg';
import { HeaderNav, IHeaderNav } from "../Atoms/HeaderNav";




export const HeaderGeneral = () => {
    const userAuthorization = useStore($userAuthorization);

    const HeaderlogoArray:IHeaderlogo[]=[
        {link:"/",indexlink:"0",class:"Headerlogo_Elem",img:ikit},
    ]
    
    let HeaderNavArray:IHeaderNav[]  = [];
    
    Pages.map((page:any, index:any) => [HeaderNavArray.push({link:page.link,indexlink:index,class:"HeaderNav_Elem",authorization:userAuthorization,text:page.title})]);

  return (
   
      
        <div className={`HeaderGeneral`} >
            {HeaderlogoArray.map((e,i)=><Headerlogo link={e.link}
                indexlink={e.indexlink} class={e.class} img={e.img} 
            />)}
            {HeaderNavArray.map((e,i)=><HeaderNav link={e.link}
                indexlink={e.indexlink} class={e.class} authorization={e.authorization} text={e.text} 
            />)}
        </div>
  );
};



