import React from "react";
import { useSelector } from "react-redux";
import { List, Typography } from "@mui/material/";
import { useHistory } from "react-router-dom";
import { isAuthorized } from "../redux/selectors.js";
import HeaderLink from "./HeaderLink";

const NavPanel = () => {
  const history = useHistory();
  const isAuth = useSelector(isAuthorized);

  const dashboardLink = () => {
    history.push("/");
  };

  const exerciseLink = () => {
    history.push("/exercise");
  };

  const exerciseEditLink = () => {
    history.push("/exercise/edit");
  };

  const workoutLink = () => {
    history.push("/workout");
  };

  const workoutEditLink = () => {
    history.push("/workout/edit");
  };

  const registerLink = () => {
    history.push(`/registr`);
  };

  const loginLink = () => {
    history.push(`/login`);
  };

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
          <HeaderLink clickHandler={workoutLink} name="New Workout" />
          <HeaderLink clickHandler={workoutEditLink} name="Edit Workout" />
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
