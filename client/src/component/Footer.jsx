import React from "react";
import { Box } from "@mui/material/";

import { useHistory } from "react-router-dom";
import HeaderLink from "./HeaderLink";

const Footer = () => {
  const history = useHistory();
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

  return (
    <Box
      sx={{
        color: "purple",
        display: "flex",
        padding: "0 10%",
        height: 40,
      }}>
      <HeaderLink clickHandler={dashboardLink} name="Dashboard" />
      <HeaderLink clickHandler={exerciseLink} name="New Exercise" />
      <HeaderLink clickHandler={exerciseEditLink} name="Edit Exercise" />
      <HeaderLink clickHandler={workoutLink} name="New Workout" />
      <HeaderLink clickHandler={workoutEditLink} name="Edit Workout" />
    </Box>
  );
};

export default Footer;
