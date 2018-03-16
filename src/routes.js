import React from "react";
import { Switch } from "react-router-dom";

import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";
import DownloadPage from "./pages/DownloadPage";

const Routes = props => (
  <Switch>
    <Layout exact path="/" component={IndexPage} />
    <Layout exact path="/download" component={DownloadPage} />
  </Switch>
);

export default Routes;
