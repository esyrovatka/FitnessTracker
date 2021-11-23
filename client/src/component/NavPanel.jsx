import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { List, Typography } from "@mui/material/";
import { useHistory } from "react-router-dom";
import { currData, isAuthorized, workout } from "../redux/selectors.js";
import HeaderLink from "./HeaderLink";
import { NAV_PANEL_LINK } from "../constants/PagePaths.js";

const NavPanel = () => {
  const history = useHistory();
  const isAuth = useSelector(isAuthorized);

  const dashboardLink = () => {
    history.push(NAV_PANEL_LINK.dashboard);
  };

  const exerciseLink = () => {
    history.push(NAV_PANEL_LINK.exercise);
  };

  const exerciseEditLink = () => {
    history.push(NAV_PANEL_LINK.exerciseEdit);
  };

  const workoutLink = () => {
    history.push(NAV_PANEL_LINK.workout);
  };

  const workoutEditLink = () => {
    history.push(NAV_PANEL_LINK.workoutEdit);
  };

  const registerLink = () => {
    history.push(NAV_PANEL_LINK.register);
  };

  const loginLink = () => {
    history.push(NAV_PANEL_LINK.login);
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
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#a87ee0",
        minWidth: 250,
        textAlign: "center",
      }}>
      <Typography
        component="h1"
        variant="h5"
        gutterBottom
        sx={{
          color: "#f4f4f4",
          padding: 5,
          borderBottom: "2px solid grey",
          margin: 5,
        }}>
        Fit Trainer
      </Typography>
      {isAuth ? (
        <>
          <HeaderLink clickHandler={dashboardLink} name="Dashboard" />
          <HeaderLink clickHandler={exerciseLink} name="New Exercise" />
          <HeaderLink clickHandler={exerciseEditLink} name="Edit Exercise" />
          <HeaderLink
            clickHandler={workoutLink}
            name="New Workout"
            invisible={currWorkout && true}
          />
          <HeaderLink
            clickHandler={workoutEditLink}
            name="Edit Workout"
            invisible={!currWorkout && true}
          />
        </>
      ) : (
        <>
          <HeaderLink clickHandler={loginLink} name="SignIn" />
          <HeaderLink clickHandler={registerLink} name="SignUp" />
        </>
      )}
    </List>
  );
};

export default NavPanel;
