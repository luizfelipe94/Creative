import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Home/HomePage";
import FormPage from "./Form/FormPage";
import SuccessPage from "./Success/SuccessPage";
import FailedPage from "./Failed/FailedPage";

const Routes = () => (
  <Switch>
    <Route exact path={`/`} component={HomePage} />
    <Route exact path={`/form`} component={FormPage} />
    <Route exact path={`/success`} component={SuccessPage} />
    <Route exact path={`/failed`} component={FailedPage} />
  </Switch>
);

export default Routes;
