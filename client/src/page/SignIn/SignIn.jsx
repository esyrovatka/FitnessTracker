import React from "react";
import AuthField from "../../component/authContainer";
import { AuthType } from "../../constants/Auth";

const SignIn = () => {
  return <AuthField type={AuthType.SignIn} />;
};
export default SignIn;
