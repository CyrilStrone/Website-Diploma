
import { Switch, Route ,  Link,} from "react-router-dom";

import { Pages } from 'Pages/Routes'
import React from 'react'
export interface IRoute {
        link: string
        title: string
        component: JSX.Element
    }
export function App() {
    // require('./index.styl')

    return( <>
        <div className="menu">
            {Pages.map((page:any, index:any) => <Link to={page.link} key={index}>{page.title}</Link>)}
        </div>
        <Switch>
            {Pages.map((page:any, index:any) => <Route exact path={page.link} component={page.component}></Route>)}
        </Switch>
        
        
    </>)
}