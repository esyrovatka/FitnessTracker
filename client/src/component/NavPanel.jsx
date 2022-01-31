import React from "react";
import { List, Typography } from "@mui/material/";
import LinkMenu from "./LinkMenu";

const NavPanel = () => {
  const listStyle = {
    display: "flex",
    flexDirection: "column",
    bgcolor: "rgb(255 255 255 / 10%)",
    minWidth: 250,
    textAlign: "center",
    color: "#21c9a6",
    fontWeight: 600,
    margin: "0px 0px 0px 30px",
  };

  const typographyStyle = {
    color: "#21c9a6",
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
