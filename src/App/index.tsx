
import { Switch, Route ,} from "react-router-dom";

import { Pages } from 'Pages/Routes'
import React from 'react'
import { Header } from "../Common/UI/Header/Organoids/Header";
export interface IRoute {
        link: string
        title: string
        component: JSX.Element
    }
export function App() {
    // require('./index.styl')

    return( <div className="App">
        <Header/>      
        {/* <div className="menu">
            {Pages.map((page:any, index:any) => <Link to={page.link} key={index}>{page.title}</Link>)}
        </div> */}
        <Switch>
            {Pages.map((page:any, index:any) => <Route exact path={page.link} component={page.component}></Route>)}
        </Switch>
        
        
    </div>)
}