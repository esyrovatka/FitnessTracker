import React from "react";
import AuthField from "../../component/auth";
import { AuthType } from "../../constants/Auth";

const SignIn = () => {
  return <AuthField type={AuthType.SignIn} />;
};
export default SignIn;
