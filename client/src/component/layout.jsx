import React, { useEffect, useState } from "react";
import NavPanel from "./NavPanel.jsx";
import { Box } from "@mui/material/";
import Footer from "./Footer.jsx";
import logo from "../image/logo.jpg";
import logo2 from "../image/logo2.jpg";
import logo3 from "../image/logo3.jpg";
import logo4 from "../image/logo4.jpg";
import logo5 from "../image/logo5.jpg";
import logo6 from "../image/logo6.jpg";
import login from "../image/login.jpg";
import { useLocation } from "react-router";

const Layout = ({ children }) => {
  const location = useLocation();
  const style = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
  };
  let imgLogo;

  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    const { pathname } = location;
    setCurrentPath(pathname);
  }, [location]);

  switch (currentPath) {
    case "/":
      imgLogo = logo;
      break;
    case "/exercise":
      imgLogo = logo2;
      break;
    case "/exercise/edit":
      imgLogo = logo3;
      break;
    case "/workout":
      imgLogo = logo4;
      break;
    case "/workout/edit":
      imgLogo = logo5;
      break;
    case "/settings":
      imgLogo = logo6;
      break;

    case "/login":
      imgLogo = login;
      break;

    // case "/register":
    //   imgLogo = logo;
    //   break;

    default:
      imgLogo = "";
      // imgLogo = logo;
      break;
  }

  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        backgroundImage: `url(${imgLogo})`,
        backgroundSize: "cover",
        display: "flex",
        padding: "0px",
        margin: "0px;",
        height: "100vh",
      }}>
      <NavPanel />
      {children}
      {/* <Box sx={style}>
        <Footer />
      </Box> */}
    </Box>
  );
};

export default Layout;
