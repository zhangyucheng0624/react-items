import React from "react";
import {Route,Switch} from "react-router-dom";
import Login from "./pages/login"
export default class App extends React.Component{
  render() {
    return <Switch>
      <Route path="./login" component={Login}/>
    </Switch>
  }
}