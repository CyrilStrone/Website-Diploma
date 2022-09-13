import { createEvent, createStore } from "effector";



export const $userAuthorization = createStore<boolean>(true)  
export const setuserAuthorization = createEvent<boolean>()
$userAuthorization.on(setuserAuthorization, (_,val)=> val);

