import React from "react";
import LinkMenu from "./LinkMenu";
import { List } from "@mui/material/";

const Footer = () => {
  const listStyle = {
    display: "flex",
    color: "purple",
    width: "100%",
    backgroundColor: "#f6b85a",
    opacity: "0.7",
  };
  return (
    <List sx={listStyle}>
      <LinkMenu />
    </List>
  );
};

export default Footer;
