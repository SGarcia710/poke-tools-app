import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import { HOME, TYPES } from "./path";

import Home from "../Containers/Home/Home";
import Types from "../Containers/Types/Types";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route exact path={TYPES} component={Types} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
