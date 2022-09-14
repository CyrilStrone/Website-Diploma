import { createEvent, createStore } from "effector";



export const $userAuthorization = createStore<boolean>(true)  
export const setuserAuthorization = createEvent<boolean>()
$userAuthorization.on(setuserAuthorization, (_,val)=> val);

export const $menuBurger = createStore<boolean>(false)  
export const setmenuBurger = createEvent<boolean>()
$menuBurger.on(setmenuBurger, (_,val)=> val);

