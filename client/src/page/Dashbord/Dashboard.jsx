import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isAuthorized } from "../../redux/selectors.js";
import { getAllExercise } from "../../redux/action";
import { Box, Typography } from "@mui/material/";
import Header from "../../component/Header.jsx";
import Footer from "../../component/Footer.jsx";

const Dashboard = () => {
  const isAuth = useSelector(isAuthorized);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllExercise());
  }, [dispatch]);

  return isAuth ? (
    <>
      <Box component="main" sx={{ backgroundColor: "#f4f4f4", width: "100%" }}>
        <Header name="Dashboard" />

        <Box
          sx={{
            marginTop: 25,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "60vh",
          }}>
          <Typography variant="h1" component="div" gutterBottom>
            Dashboard
          </Typography>
        </Box>
        <Footer />
      </Box>
    </>
  ) : (
    <Redirect to="/login" />
  );
};

export default Dashboard;
