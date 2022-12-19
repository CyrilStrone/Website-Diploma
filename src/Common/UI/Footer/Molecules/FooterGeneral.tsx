import React from "react";

// import {  Footerlogo, IFooterlogo } from "../Atoms/FooterLogo";
import { Pages } from "../../../../Pages/Routes";
import { $userAuthorization } from "../../../hooks";
import { useStore } from "effector-react";
// import ikit from '../../../Assets/Search/ikit.jpg';
// import logo from '../../../Assets/Logo/LogoBig.svg';

import { FooterNav, IFooterNav } from "../Atoms/FooterrNav";
import fc from "../../../Assets/Footer/fc.svg";
import inn from "../../../Assets/Footer/in.svg";

export const FooterGeneral = () => {
  const userAuthorization = useStore($userAuthorization);

  // const FooterlogoArray:IFooterlogo[]=[
  //     {link:"/Home",indexlink:"0",class:"Footerlogo_Elem",img:logo},
  // ]

  let FooterNavArray: IFooterNav[] = [];

  Pages.map((page: any, index: any) => [
    FooterNavArray.push({
      link: page.link,
      indexlink: index,
      class: "HeaderNav_Elem",
      authorization: userAuthorization,
      text: page.title,
    }),
  ]);

  return (
    <div className={`FooterGeneral`}>
      {/* <div className={`FooterGeneral_Logo`}>
                {FooterlogoArray.map((e,i)=><Footerlogo link={e.link}
                    indexlink={e.indexlink} class={e.class} img={e.img} 
                />)}
             </div> */}

      <div className={`FooterGeneral_Navs`}>
        {FooterNavArray.map((e, i) => (
          <FooterNav
            link={e.link}
            indexlink={e.indexlink}
            class={e.class}
            authorization={e.authorization}
            text={e.text}
          />
        ))}
      </div>
      <div className={`FooterGeneral_Line`}>
        
      </div>
      <div className={`FooterGeneral_About`}>
        <div className={`FooterGeneral_About_Contacts`}>
            <div>
                Email: cyrilstrone@gmail.com
            </div>
            <div>
            Phone: +79504291970

            </div>
        </div>
        <div className={`FooterGeneral_About_Right`}>
        © 2022 Фуфелшмертц Пакость Инкорпорейтед. Все права под контролем. 
        </div>
        <div className={`FooterGeneral_About_Social`}>
        <img src={fc} alt="fc" />
        <img src={inn} alt="in" />

        </div>
      </div>
    </div>
  );
};
