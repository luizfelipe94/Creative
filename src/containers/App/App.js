import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Routes from "../Routes";
import { Store } from "../../store";

const App = () => (
  <>
    <CssBaseline />
    <Router>
      <Routes store={Store} />
    </Router>
  </>
);

export default App;