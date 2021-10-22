// @flow
import * as React from "react";
import type { Node } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import AuthField from "./authField";
import { useDispatch } from "react-redux";
import { test } from "../../redux/action";

type Props = {
  name: string,
};

const AuthContainer = ({ name }: Props): Node => {
  const history = useHistory();
  const dispatch = useDispatch();

  const submitFunc = (event) => {
    event.preventDefault();

    dispatch(test(user));
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;
    setUser({ ...user, [name]: val });
  };

  const helpLink = () => {
    name === "SignIn" ? history.push("/registr") : history.push("/login");
  };

  return (
    <AuthField
      submitFunc={submitFunc}
      handleChange={handleChange}
      user={user}
      helpLink={helpLink}
      type={name}
    />
  );
};

export default AuthContainer;
