import React from "react";
import NavPanel from "./NavPanel.jsx";
import { Box } from "@mui/material/";
const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", height: "98vh" }}>
      <NavPanel />
      {children}
    </Box>
  );
};

export default Layout;
