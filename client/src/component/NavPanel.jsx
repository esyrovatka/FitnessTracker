import React from "react";
import { List, Typography } from "@mui/material/";
import LinkMenu from "./LinkMenu";

const NavPanel = () => {
  const listStyle = {
    display: "flex",
    flexDirection: "column",
    bgcolor: "#a87ee0",
    minWidth: 250,
    textAlign: "center",
  };

  const typographyStyle = {
    color: "#f4f4f4",
    padding: 5,
    borderBottom: "2px solid grey",
    margin: 5,
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
