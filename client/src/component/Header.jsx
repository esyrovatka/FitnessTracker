import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import {
  Box,
  Typography,
  SpeedDial,
  SpeedDialAction,
  Avatar,
} from "@mui/material/";

import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/action";
import { PagePaths } from "../constants/PagePaths";

const actions = [
  { icon: <SettingsIcon />, name: "Settings" },
  { icon: <LogoutIcon />, name: "LogOut" },
];

const Header = ({ name }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = (name) => () => {
    name === "Settings" && history.push(PagePaths.settings);
    name === "LogOut" && dispatch(logOut());
  };

  return (
    <Box
      sx={{
        color: "purple",
        display: "flex",
        padding: "0 10%",
        height: 50,
        alignItems: "center",
      }}>
      <Typography variant="h4" component="div">
        {name}
      </Typography>

      <Box sx={{ height: 20, transform: "translate(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          direction="left"
          icon={<Avatar />}>
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClick(action.name)}
            />
          ))}
        </SpeedDial>
      </Box>
    </Box>
  );
};
Header.defaultProps = {
  name: "",
};

Header.propTypes = {
  name: PropTypes.string,
};
export default Header;
