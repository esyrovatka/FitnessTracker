import React from "react";
import LinkMenu from "./LinkMenu";
import { List } from "@mui/material/";

const Footer = () => {
  const listStyle = {
    display: "flex",
    color: "purple",
  };
  return (
    <List sx={listStyle}>
      <LinkMenu />
    </List>
  );
};

export default Footer;
