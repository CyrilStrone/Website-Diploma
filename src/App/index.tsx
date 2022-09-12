import { Switch, Route } from "react-router-dom";

import { Pages } from "Pages/Routes";
import React from "react";
import { Header } from "../Common/UI/Header/Organoids/Header";
import "./index.css";
import "./font.css";
export interface IRoute {
  link: string;
  title: string;
  component: JSX.Element;
}
export function App() {
  // require('./index.styl')

  return (
    <div className="App">
      <Header />
      <div className="App_Actual">
        <Switch>
          {Pages.map((page: any, index: any) => (
            <Route exact path={page.link} component={page.component}></Route>
          ))}
        </Switch>
      </div>
    </div>
  );
}
