import React from "react";
import { Headerlogo, IHeaderlogo } from "../Atoms/HeaderLogo";
// import {  IHeaderNav } from "../Atoms/HeaderNav";
import { PagesLogin } from '../../../../Pages/Routes'
import { $userAuthorization } from "../../../hooks";
// import { $menuBurger, $userAuthorization, setmenuBurger } from "../../../hooks";

import { useStore } from "effector-react";
// import ikit from '../../../Assets/Search/ikit.jpg';
import logo from '../../../Assets/Logo/LofoRzhaka.svg';
// import burgerIcon from '../../../Assets/Burger/BurgerIcon.svg';
// import BurgerIconExit from '../../../Assets/Burger/BurgerIconExit.svg';

import { HeaderNav, IHeaderNav } from "../Atoms/HeaderNav";
// import { slide as Menu } from 'react-burger-menu';



export const HeaderGeneral = () => {
    const userAuthorization = useStore($userAuthorization);
    // const menuBurger = useStore($menuBurger);
    const HeaderlogoArray: IHeaderlogo[] = [
        { link: "/Home", indexlink: "0", class: "Headerlogo_Elem", img: logo },
    ]

    let HeaderNavArray: IHeaderNav[] = [];

    // const handleIsOpen = () => {
    //     setmenuBurger(!menuBurger)
    // }


    PagesLogin.map((page: any, index: any) => [HeaderNavArray.push({ link: page.link, indexlink: index, class: page.class ? `${page.class}` : "HeaderNav_Elem", authorization: userAuthorization, text: page.title })]);
    console.log(HeaderNavArray)
    return (


        <div className={`HeaderGeneral`} >
            <div className={`HeaderGeneral_Logo`}>
                {HeaderlogoArray.map((e, i) => <Headerlogo link={e.link}
                    indexlink={e.indexlink} class={e.class} img={e.img}
                />)}
            </div>
            <div className={`HeaderGeneral_Title`}>
                FMZFK
            </div>
            <div className={`HeaderGeneral_Navs`}>
                {HeaderNavArray.map((e, i) => <HeaderNav link={e.link}
                    indexlink={e.indexlink} class={e.class} authorization={e.authorization} text={e.text}
                />)}
            </div>
            {/* <div className={`HeaderGeneral_Burger`}>
            <Menu onOpen={handleIsOpen} onClose={handleIsOpen} isOpen={menuBurger} burgerButtonClassName={"HeaderGeneral_BurgerButtom"} customBurgerIcon={ <img src={burgerIcon} /> } customCrossIcon={ <img src={BurgerIconExit} /> } right  pageWrapId={"page-wrap"} outerContainerId={"App"}>
                {HeaderNavArray.map((e,i)=><HeaderNav link={e.link}
                    indexlink={e.indexlink} class={e.class} authorization={e.authorization} text={e.text} 
                />)}
            </Menu>
            </div> */}

        </div>
    );
};



