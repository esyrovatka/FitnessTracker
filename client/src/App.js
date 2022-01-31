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
import { PagePaths } from "./constants/PagePaths";

export default function App() {
  const pagesPathsList = [
    { path: PagePaths.dashboard, exact: true, Component: <Dashbord /> },
    { path: PagePaths.exercise, exact: true, Component: <NewExercise /> },
    { path: PagePaths.exerciseEdit, Component: <ExersiceEdit /> },
    { path: PagePaths.workout, exact: true, Component: <NewWorkout /> },
    { path: PagePaths.workoutEdit, Component: <WorkoutEdit /> },
    { path: PagePaths.login, Component: <SignIn /> },
    { path: PagePaths.register, Component: <SignUp /> },
    { path: PagePaths.verification, Component: <VerificationEmail /> },
    { path: PagePaths.settings, Component: <Settings /> },
  ];

  return (
    <div id="main">
      <Router>
        <Layout>
          <Switch>
            {pagesPathsList.map(({ path, exact, Component }, index) => (
              <Route path={path} exact={!!exact} key={index}>
                {Component}
              </Route>
            ))}
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}
