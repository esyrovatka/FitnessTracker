import React from "react";
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
import { useHistory } from "react-router-dom";

const actions = [{ icon: <LogoutIcon />, name: "LogOut" }];

const Header = ({ name }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    console.log(actions.name);
    dispatch(logOut());
    history.push(`/login`);
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
      <Typography variant="h4" component="div" gutterBottom>
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

export default Header;
