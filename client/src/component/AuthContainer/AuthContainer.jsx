import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";
import AuthField from "./authField";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, registrAction, logOut } from "../../redux/action";
import { currentUserError, isAuthorized } from "../../redux/selectors.js";
import { AuthType } from "../../constants/Auth";
import { PagePaths } from "../../constants/PagePaths";

const AuthContainer = ({ type }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currUserError = useSelector(currentUserError);
  const isAuth = useSelector(isAuthorized);
  const [disableForm, setDisableForm] = useState(true);

  const submitFunc = async (event) => {
    event.preventDefault();
    type === AuthType.SignIn && dispatch(loginAction(user));
    type === AuthType.SignUp && dispatch(registrAction(user));
  };

  useEffect(() => {
    isAuth && history.push(PagePaths.dashboard);
  }, [isAuth, history]);

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
    currUserError !== null && dispatch(logOut());
    const name = event.target.name;
    const val = event.target.value;
    setUser({ ...user, [name]: val });
  };

  useEffect(() => {
    passwordValid() && emailValid()
      ? setDisableForm(false)
      : setDisableForm(true);
  }, [passwordValid, emailValid, currUserError]);

  const helpLink = () => {
    type === AuthType.SignIn && history.push(PagePaths.register);
    type === AuthType.SignUp && history.push(PagePaths.login);
  };

  return (
    <AuthField
      submitFunc={submitFunc}
      handleChange={handleChange}
      user={user}
      helpLink={helpLink}
      type={type}
      disableForm={disableForm}
      errorMessage={currUserError}
    />
  );
};

AuthContainer.defaultProps = {
  type: "",
};

AuthContainer.propTypes = {
  type: PropTypes.string,
};

export default AuthContainer;
