import React from "react";

import {  Footerlogo, IFooterlogo } from "../Atoms/FooterLogo";
import { Pages } from '../../../../Pages/Routes'
import { $userAuthorization } from "../../../hooks";
import {useStore} from "effector-react";
// import ikit from '../../../Assets/Search/ikit.jpg';
import logo from '../../../Assets/Logo/LogoBig.svg';

import { FooterNav, IFooterNav } from "../Atoms/FooterrNav";



export const FooterGeneral = () => {
    const userAuthorization = useStore($userAuthorization);

    const FooterlogoArray:IFooterlogo[]=[
        {link:"/Home",indexlink:"0",class:"Footerlogo_Elem",img:logo},
    ]
    
    let FooterNavArray:IFooterNav[]  = [];
    
    Pages.map((page:any, index:any) => [FooterNavArray.push({link:page.link,indexlink:index,class:"HeaderNav_Elem",authorization:userAuthorization,text:page.title})]);

  return (
   
      
        <div className={`FooterGeneral`} >
             <div className={`FooterGeneral_Logo`}>
                {FooterlogoArray.map((e,i)=><Footerlogo link={e.link}
                    indexlink={e.indexlink} class={e.class} img={e.img} 
                />)}
             </div>
           
            <div className={`FooterGeneral_Navs`}>
                {FooterNavArray.map((e,i)=><FooterNav link={e.link}
                    indexlink={e.indexlink} class={e.class} authorization={e.authorization} text={e.text} 
                />)}
            </div>
            
            
        </div>
  );
};



