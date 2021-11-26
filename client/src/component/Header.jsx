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
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/action";
import { PagePaths } from "../constants/PagePaths";
import { currUserName } from "../redux/selectors";

const actions = [
  { icon: <SettingsIcon />, name: "Settings" },
  { icon: <LogoutIcon />, name: "LogOut" },
];

const Header = ({ name }) => {
  const currName = useSelector(currUserName);
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
        padding: "0 4%",
        height: 50,
        alignItems: "center",
      }}>
      <Typography variant="h4" component="div">
        {name}
      </Typography>
      <Box
        sx={{
          height: 20,
          transform: "translate(0px)",
          flexGrow: 1,
          display: "flex",
          justifyContent: "flex-end",
        }}>
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
        <Typography variant="h4" sx={{ pl: 2 }}>
          {currName}
        </Typography>
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
