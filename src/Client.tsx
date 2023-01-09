import React from "react";
import ReactDOM from "react-dom";
import {  HashRouter } from "react-router-dom";
import { App } from "App";

const entryBlock = document.getElementById("root");
const renderFunction: ReactDOM.Renderer = entryBlock.hasChildNodes()
  ? ReactDOM.hydrate
  : ReactDOM.render;

renderFunction(
  <HashRouter>
    <App />
  </HashRouter>,
  entryBlock
);
