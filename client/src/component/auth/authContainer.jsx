import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import AuthField from "./authField";

const AuthContainer = ({ type }) => {
  const history = useHistory();

  const submitFunc = (event) => {
    event.preventDefault();
    console.log(user);
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
    type === "SignIn" && history.push("/registr");
    type === "SignUp" && history.push("/login");
  };

  return (
    <AuthField
      submitFunc={submitFunc}
      handleChange={handleChange}
      user={user}
      helpLink={helpLink}
      type={type}
    />
  );
};

export default AuthContainer;
