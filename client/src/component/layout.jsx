import React from "react";
import NavPanel from "./NavPanel.jsx";
import { Box } from "@mui/material/";
import Footer from "./Footer.jsx";
const Layout = ({ children }) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
  };
  return (
    <Box sx={{ display: "flex", height: "98vh", backgroundColor: "#f4f4f4" }}>
      <NavPanel />
      <Box sx={style}>
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
