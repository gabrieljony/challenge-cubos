import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "../pages/App";
import Movie from "../pages/Movie";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/movie" component={Movie} exact/>
    </Switch>
  );
};
