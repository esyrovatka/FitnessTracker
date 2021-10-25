import React from "react";
import { ListItem, ListItemButton } from "@mui/material/";

const HeaderLink = ({ clickHandler, name }) => {
  return (
    <ListItem>
      <ListItemButton onClick={clickHandler} sx={{ justifyContent: "center " }}>
        {name}
      </ListItemButton>
    </ListItem>
  );
};

export default HeaderLink;
