// @flow
import * as React from "react";
import type { Node } from "react";
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import AuthField from "./authField";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, registrAction } from "../../redux/action";
import { currentUserError, currentUser } from "../../redux/selectors.js";

type Props = {
  name: string,
};

const AuthContainer = ({ name }: Props): Node => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currUserError = useSelector(currentUserError);
  const currUser = useSelector(currentUser);

  const submitFunc = async (event) => {
    event.preventDefault();
    name === "SignIn" && (await dispatch(loginAction(user)));
    name === "SignUp" && (await dispatch(registrAction(user)));
  };

  const [disableForm, setDisableForm] = useState(true);
  const [user, setUser] = useState({
    email: "",
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
    passwordValid() && emailValid() && history.push("/");
  }, [emailValid, passwordValid, history]);

  useEffect(() => {
    currUser && submitLink();
    // currUserError && setUser({ ...user, password: "" });
  }, [currUser, submitLink, currUserError]);

  return (
    <AuthField
      submitFunc={submitFunc}
      handleChange={handleChange}
      user={user}
      helpLink={helpLink}
      type={name}
      disableForm={disableForm}
      errorMessage={currUserError}
    />
  );
};

export default AuthContainer;
