import React from "react";
import { Switch, Route } from "react-router-dom";

import {App, Movie} from "../pages";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/movie" component={Movie} exact/>
    </Switch>
  );
};
