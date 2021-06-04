import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginComponent } from "../components/login.component";
import { CallbackHandlerComponent } from "../components/callback.component";
import { LogoutComponent } from "../components/logout.component";
import { RouteGuard } from "./RouteGuard";
import { PrivatePage } from "./PrivatePage";
import { useSelector } from "react-redux";
import { selectUserInfos } from "../redux-store/user.selectors";

export const Routes = () => {
  const { isAuthOk, isLoading } = useSelector((state) =>
    selectUserInfos(state)
  );
  if (isLoading) {
    return null;
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginComponent} />
        <Route exact path="/callback" component={CallbackHandlerComponent} />
        <Route exact path="/logout" component={LogoutComponent} />
        <Route path="*" render={RouteGuard(PrivatePage, isAuthOk)} />
      </Switch>
    </Router>
  );
};
