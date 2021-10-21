import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashbord from "./page/Dashbord";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import Layout from "./component/layout";

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Dashbord />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/registr">
            <SignUp />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}