import React from "react";
// import { useDispatch } from "react-redux";
import { List, ListItem, ListItemButton } from "@mui/material/";
import { useHistory } from "react-router-dom";
// import { logOut } from "../redux/action";

const Header = () => {
  const history = useHistory();
  // const dispatch = useDispatch();
  const dashboardLink = () => {
    history.push("/");
  };

  const registerLink = () => {
    history.push(`/registr`);
  };
  const loginLink = () => {
    history.push(`/login`);
  };

  const logoutFunc = () => {
    localStorage.removeItem("token");
    // dispatch(logOut());
  };

  return (
    <List
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        bgcolor: "#f4f4f4",
      }}>
      <ListItem>
        <ListItemButton onClick={dashboardLink}>Dashboard</ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton onClick={loginLink}>SignIn</ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton onClick={registerLink}>SignUp</ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton onClick={logoutFunc}>LogOut</ListItemButton>
      </ListItem>
    </List>
  );
};

export default Header;
