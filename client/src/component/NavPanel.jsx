import React from "react";
import { List, Typography } from "@mui/material/";
import LinkMenu from "./LinkMenu";

const NavPanel = () => {
  const listStyle = {
    display: "flex",
    flexDirection: "column",
    bgcolor: "#fff",
    opacity: "0.1",
    minWidth: 250,
    textAlign: "center",
    color: "#992a22",
    fontWeight: 600,
  };

  const typographyStyle = {
    color: "#fb4e4e",
    padding: 5,
    borderBottom: "2px solid grey",
    fontWeight: 600,
    margin: "0px 20px 15px",
  };
  return (
    <List sx={listStyle}>
      <Typography component="h1" variant="h5" gutterBottom sx={typographyStyle}>
        Fit Trainer
      </Typography>
      <LinkMenu />
    </List>
  );
};

export default NavPanel;
