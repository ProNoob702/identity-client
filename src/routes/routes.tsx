import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginComponent } from "../components/login.component";
import { CallbackHandlerComponent } from "../components/callback.component";
import { LogoutComponent } from "../components/logout.component";
import { RouteGuard } from "./RouteGuard";
import { PrivatePage } from "./PrivatePage";
import { useSelector } from "react-redux";
import { selectUserInfos } from "../redux-store/user.selectors";
import { RootState } from "../redux-store/store";
import { userManager } from "../config/userManager";
import axios from "axios";
import Home from "../components/home.component";

export const Routes = () => {
  const { isAuthOk, isLoading } = useSelector((state: RootState) =>
    selectUserInfos(state)
  );
  // check if user is signed in
  userManager.getUser().then((user) => {
    if (user && !user.expired) {
      debugger;
      // Set the authorization header for axios
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + user.access_token;
    }
  });
  if (isLoading) {
    return null;
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginComponent} />
        <Route exact path="/callback" component={CallbackHandlerComponent} />
        <Route exact path="/logout" component={LogoutComponent} />
        <Route path="*" render={RouteGuard(PrivatePage, isAuthOk)} />
      </Switch>
    </Router>
  );
};
