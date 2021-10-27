import React from "react";
import CreateFormContainer from "../../component/createForm";
import { Box } from "@mui/material/";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
const NewExercise = () => {
  return (
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
      <Footer />
    </Box>
  );
};

export default NewExercise;
