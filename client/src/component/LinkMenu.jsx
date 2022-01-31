import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { currData, isAuthorized, workout } from "../redux/selectors.js";
import HeaderLink from "./HeaderLink";
import { PagePaths } from "../constants/PagePaths.js";
const LinkMenu = () => {
  const history = useHistory();
  const isAuth = useSelector(isAuthorized);

  const dashboardLink = () => {
    history.push(PagePaths.dashboard);
  };

  const exerciseLink = () => {
    history.push(PagePaths.exercise);
  };

  const exerciseEditLink = () => {
    history.push(PagePaths.exerciseEdit);
  };

  const workoutLink = () => {
    history.push(PagePaths.workout);
  };

  const workoutEditLink = () => {
    history.push(PagePaths.workoutEdit);
  };

  const registerLink = () => {
    history.push(PagePaths.register);
  };

  const loginLink = () => {
    history.push(PagePaths.login);
  };
  const settingsLink = () => {
    history.push(PagePaths.settings);
  };

  const allWorkout = useSelector(workout);
  const currWorkoutDate = useSelector(currData);
  const [currWorkout, setCurrWorkout] = useState(); // curr data workout

  useEffect(() => {
    const result =
      allWorkout &&
      allWorkout.find(
        (item) =>
          new Date(item.data).getDate() === currWorkoutDate.getDate() &&
          new Date(item.data).getMonth() === currWorkoutDate.getMonth()
      );
    setCurrWorkout(result);
  }, [currWorkoutDate, allWorkout]);
  return isAuth ? (
    <>
      <HeaderLink clickHandler={dashboardLink} name="Dashboard" path="/" />
      <HeaderLink
        clickHandler={exerciseLink}
        name="New Exercise"
        path="/exercise"
      />
      <HeaderLink
        clickHandler={exerciseEditLink}
        name="Edit Exercise"
        path="/exercise/edit"
      />
      <HeaderLink
        clickHandler={workoutLink}
        name="New Workout"
        invisible={currWorkout && true}
        path="/workout"
      />
      <HeaderLink
        clickHandler={workoutEditLink}
        name="Edit Workout"
        invisible={!currWorkout && true}
        path="/workout/edit"
      />
      <HeaderLink
        clickHandler={settingsLink}
        name="Settings"
        path="/settings"
      />
    </>
  ) : (
    <>
      <HeaderLink clickHandler={loginLink} name="SignIn" path="/login" />
      <HeaderLink clickHandler={registerLink} name="SignUp" path="/register" />
    </>
  );
};

export default LinkMenu;
