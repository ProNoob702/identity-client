import React from "react";
import { Route, Switch } from "react-router-dom";

export const PrivatePage: React.FC<{}> = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <div>touta</div>} />
    </Switch>
  );
};
