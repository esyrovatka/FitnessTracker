import React from "react";
import PropTypes from "prop-types";
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

HeaderLink.defaultProps = {
  clickHandler: () => {},
  invisible: false,
  name: "",
};

HeaderLink.propTypes = {
  clickHandler: PropTypes.func,
  invisible: PropTypes.bool,
  name: PropTypes.string,
};

export default HeaderLink;
