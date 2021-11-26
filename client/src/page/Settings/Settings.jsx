import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Box, Typography, Button } from "@mui/material/";
import SettingsComponent from "../../component/SettingsComponent/SettingsComponent";
import Header from "../../component/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  currUserEmail,
  currUserName,
  isAuthorized,
} from "../../redux/selectors";
import { userUpdateAction } from "../../redux/action";
import { PagePaths } from "../../constants/PagePaths";
import ModalComponent from "../../component/ModalComponent";

const Settings = () => {
  const currEmail = useSelector(currUserEmail);
  const currName = useSelector(currUserName);
  const isAuth = useSelector(isAuthorized);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: currName || "",
    email: currEmail || "",
    password: "",
    confirmPassword: "",
  });

  const [errorForm, setErrorForm] = useState(null);
  const [open, setOpen] = useState(false);
  const changeHandler = (e) => {
    const { value, name } = e.target;
    validateForm(name, value) ? setErrorForm(null) : setErrorForm("error");
    setUser({ ...user, [name]: value });
  };

  const blurHandler = (e) => {
    const { value, name } = e.target;
    validateForm(name, value) ? setErrorForm(null) : setErrorForm("error");
  };

  const validateForm = (name, value) => {
    switch (name) {
      case "name":
        return value.length > 2;
      case "email":
        if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          return true;
        } else {
          return false;
        }
      case "password":
        return value.length > 5 && value === user.confirmPassword;
      case "confirmPassword":
        return value.length > 5 && value === user.password;
      default:
        return true;
    }
  };

  const updateInfo = () => {
    if (errorForm) {
      console.log("error");
    } else {
      setUser({ ...user, password: "", confirmPassword: "" });
      dispatch(userUpdateAction(user));
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 500);
    }
  };

  return isAuth ? (
    <Container component="main">
      <ModalComponent name="success" openModal={open} />
      <Header name="Settings" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 10,
        }}>
        {/* <Typography variant="h1" sx={{ textAlign: "center" }}>
          Settings
        </Typography> */}

        <SettingsComponent
          label="Enter new name:"
          user={user}
          name="name"
          placeholder="Enter new name"
          changeHandler={changeHandler}
          blurHandler={blurHandler}
        />
        <SettingsComponent
          label="Edit email:"
          user={user}
          name="email"
          placeholder="Enter new email"
          changeHandler={changeHandler}
          blurHandler={blurHandler}
        />
        <SettingsComponent
          label="Enter new password:"
          user={user}
          isRequire
          isPassword
          name="password"
          placeholder="Enter new password"
          changeHandler={changeHandler}
          blurHandler={blurHandler}
        />
        <SettingsComponent
          label="Confirm new password:"
          user={user}
          isRequire
          isPassword
          name="confirmPassword"
          placeholder="Confirm new password"
          changeHandler={changeHandler}
          blurHandler={blurHandler}
        />
        {errorForm && (
          <Typography sx={{ textAlign: "center", color: "red" }}>
            Add correct info
          </Typography>
        )}

        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2, width: 150 }}
          onClick={updateInfo}
          disabled={errorForm ? true : false}>
          Update Info
        </Button>
      </Box>
    </Container>
  ) : (
    <Redirect to={PagePaths.login} />
  );
};

export default Settings;
