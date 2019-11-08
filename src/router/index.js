import React from "react";
import { Switch, Route } from "react-router-dom";

import {App, Movie} from "../pages";

const Routes = () => (
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/movie/:id" component={Movie} exact/>
    </Switch>
  );

  export default Routes;