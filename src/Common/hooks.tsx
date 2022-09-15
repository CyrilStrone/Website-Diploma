import { createEvent, createStore } from "effector";
import UserPicture from "../Common/Assets/User/UserPicture.jpg"


export const $userAuthorization = createStore<boolean>(true)  
export const setuserAuthorization = createEvent<boolean>()
$userAuthorization.on(setuserAuthorization, (_,val)=> val);

export const $menuBurger = createStore<boolean>(false)  
export const setmenuBurger = createEvent<boolean>()
$menuBurger.on(setmenuBurger, (_,val)=> val);

export const $userPicture = createStore<string>(UserPicture)  
export const setuserPicture = createEvent<string>()
$userPicture.on(setuserPicture, (_,val)=> val);

export const $userName= createStore<string>("Cyril Strone")  
export const setuserName = createEvent<string>()
$userName.on(setuserName, (_,val)=> val);

