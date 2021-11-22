// @flow
import * as React from "react";
import type { Node } from "react";
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import AuthField from "./authField";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, registrAction } from "../../redux/action";
import { currentUserError, isAuthorized } from "../../redux/selectors.js";

type Props = {
  name: string,
  currEmail: string,
};

const AuthContainer = ({ name, currEmail }: Props): Node => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currUserError = useSelector(currentUserError);

  const isAuth = useSelector(isAuthorized);

  const submitFunc = async (event) => {
    event.preventDefault();
    name === "SignIn" && (await dispatch(loginAction(user)));
    name === "SignUp" && (await dispatch(registrAction(user)));
  };

  const [disableForm, setDisableForm] = useState(true);
  const [user, setUser] = useState({
    email: currEmail || "",
    password: "",
  });

  const passwordValid = useCallback(() => {
    return user.password.length > 5;
  }, [user.password.length]);

  const emailValid = useCallback(() => {
    const res = user.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    return res;
  }, [user.email]);

  const handleChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;
    setUser({ ...user, [name]: val });
  };

  useEffect(() => {
    passwordValid() && emailValid()
      ? setDisableForm(false)
      : setDisableForm(true);
  }, [user.password, user.email, passwordValid, emailValid]);

  const helpLink = () => {
    name === "SignIn" ? history.push("/registr") : history.push("/login");
  };

  const submitLink = useCallback(() => {
    name === "SignIn"
      ? passwordValid() && emailValid() && history.push("/")
      : passwordValid() && emailValid() && history.push("/verification");
    name === "Verification" &&
      passwordValid() &&
      emailValid() &&
      history.push("/");
  }, [emailValid, passwordValid, history, name]);

  useEffect(() => {
    isAuth && submitLink();
    // currUserError && setUser({ ...user, password: "" });
  }, [isAuth, submitLink, currUserError]);

  return (
    <AuthField
      submitFunc={submitFunc}
      handleChange={handleChange}
      user={user}
      helpLink={helpLink}
      type={name}
      disableForm={disableForm}
      errorMessage={currUserError}
      verificationEmail={currEmail}
    />
  );
};

export default AuthContainer;
