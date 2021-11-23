import React from "react";

import { CircularProgress, Box } from "@mui/material";
const Loader = () => {
  const styleBox = {
    height: "65vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  };

  return (
    <Box sx={styleBox}>
      <CircularProgress
        color="secondary"
        sx={{ width: "100px !important", height: "100px !important" }}
      />
    </Box>
  );
};

export default Loader;
