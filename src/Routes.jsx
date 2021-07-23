import React from "react";
import Notes from "./components/Notes/Notes";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </HashRouter>
  );
}
