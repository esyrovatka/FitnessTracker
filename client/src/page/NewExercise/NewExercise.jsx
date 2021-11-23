import React from "react";
import { Redirect } from "react-router-dom";
import CreateFormContainer from "../../component/createForm";
import { Box } from "@mui/material/";
import Header from "../../component/Header";
import { useSelector } from "react-redux";
import { isAuthorized } from "../../redux/selectors";
const NewExercise = () => {
  const isAuth = useSelector(isAuthorized);
  return isAuth ? (
    <Box component="main" sx={{ backgroundColor: "#f4f4f4", width: "100%" }}>
      <Header name="New Exercise" />
      <Box
        sx={{
          marginTop: 25,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "60vh",
        }}>
        <CreateFormContainer name="Exercise" type="Measurement Type" />
      </Box>
    </Box>
  ) : (
    <Redirect to="/login" />
  );
};

export default NewExercise;
