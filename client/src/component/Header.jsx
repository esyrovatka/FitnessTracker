import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  SpeedDial,
  SpeedDialAction,
  Avatar,
} from "@mui/material/";

import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/action";

const actions = [{ icon: <LogoutIcon />, name: "LogOut" }];

const Header = ({ name }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
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
              onClick={handleClick}
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
