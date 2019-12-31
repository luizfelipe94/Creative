import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'

import HomePage from "./Home/HomePage";
import FormPage from "./Form/FormPage";
import SuccessPage from "./Success/SuccessPage";
import FailedPage from "./Failed/FailedPage";

const Routes = ({ store }) => (
  <Provider store={store}>
    <Switch>
      <Route exact path={`/`} component={HomePage} />
      <Route exact path={`/form`} component={FormPage} />
      <Route exact path={`/success`} component={SuccessPage} />
      <Route exact path={`/failed`} component={FailedPage} />
    </Switch>
  </Provider>
);

export default Routes;
