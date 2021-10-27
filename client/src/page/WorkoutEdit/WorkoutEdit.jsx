import React from "react";
import { Box } from "@mui/material/";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

const WorkoutEdit = ({ clickHandler, name }) => {
  return (
    <Box component="main" sx={{ backgroundColor: "#f4f4f4", width: "100%" }}>
      <Header name="Edit Workout" />
      <Box
        sx={{
          marginTop: 25,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "60vh",
        }}>
        <div>WorkoutEdit</div>
      </Box>
      <Footer />
    </Box>
  );
};

export default WorkoutEdit;
