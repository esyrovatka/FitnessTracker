import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";
import AuthField from "./authField";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, registrAction } from "../../redux/action";
import { currentUserError, isAuthorized } from "../../redux/selectors.js";
import { AuthType } from "../../constants/Auth";

const AuthContainer = ({ type }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currUserError = useSelector(currentUserError);

  const isAuth = useSelector(isAuthorized);

  const submitFunc = async (event) => {
    event.preventDefault();
    type === AuthType.SignIn && (await dispatch(loginAction(user)));
    type === AuthType.SignUp && (await dispatch(registrAction(user)));
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
    type === AuthType.SignIn
      ? history.push("/registr")
      : history.push("/login");
  };

  const submitLink = useCallback(() => {
    passwordValid() && emailValid() && history.push("/");
  }, [emailValid, passwordValid, history]);

  useEffect(() => {
    isAuth && submitLink();
  }, [isAuth, submitLink]);

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
