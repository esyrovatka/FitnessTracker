import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashbord from "./page/Dashbord";
import NewExercise from "./page/NewExercise";
import NewWorkout from "./page/NewWorkout";
import ExersiceEdit from "./page/ExersiceEdit";
import WorkoutEdit from "./page/WorkoutEdit";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import Layout from "./component/layout";
import VerificationEmail from "./page/VerificationEmail/VerificationEmail";
import Settings from "./page/Settings";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Dashbord />
          </Route>
          <Route path="/exercise" exact>
            <NewExercise />
          </Route>
          <Route path="/exercise/edit">
            <ExersiceEdit />
          </Route>
          <Route path="/workout" exact>
            <NewWorkout />
          </Route>
          <Route path="/workout/edit">
            <WorkoutEdit />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/registr">
            <SignUp />
          </Route>
          <Route path="/verification">
            <VerificationEmail />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
