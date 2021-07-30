import React from "react";
import Notes from "./components/Notes/Notes";
import { Redirect, Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { useUserContext } from "./context/UserProvider";

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Notes} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute component={() => <h1>404 page not found</h1>} />
      </Switch>
    </HashRouter>
  );
}

function PrivateRoute({ ...data }) {
  const user = useUserContext();
  return <>{!user.token ? <Redirect to="/login" /> : <Route {...data} />}</>;
}
