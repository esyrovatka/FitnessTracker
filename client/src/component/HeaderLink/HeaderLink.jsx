import React from "react";
import { ListItem, ListItemButton } from "@mui/material/";

const HeaderLink = ({ clickHandler, name, invisible }) => {
  return (
    <ListItem>
      <ListItemButton
        onClick={clickHandler}
        sx={{ justifyContent: "center " }}
        disabled={invisible ? true : false}>
        {name}
      </ListItemButton>
    </ListItem>
  );
};

export default HeaderLink;
