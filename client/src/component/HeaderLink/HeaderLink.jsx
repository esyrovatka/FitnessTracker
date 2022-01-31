import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ListItem, ListItemButton } from "@mui/material/";
import { useLocation } from "react-router";
import "./HeaderLink.css";
const HeaderLink = ({ clickHandler, name, invisible, path }) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    const { pathname } = location;
    setCurrentPath(pathname);
  }, [location]);

  const className = currentPath === path ? "active" : "";
  return (
    <ListItem className={className}>
      <ListItemButton
        onClick={clickHandler}
        sx={{ justifyContent: "center " }}
        disabled={!!invisible}>
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
