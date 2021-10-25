import React from "react";
import Header from "./Header.jsx";
import { Box } from "@mui/material/";
const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", height: "98vh" }}>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
