import React from "react";
import { Switch } from "react-router-dom";

import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";

const Routes = props => (
  <Switch>
    <Layout exact path="/" component={IndexPage} />
  </Switch>
);

export default Routes;
