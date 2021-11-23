import React from "react";
import AuthField from "../../component/auth";
import { AuthType } from "../../constants/Auth";

const SignUp = () => {
  return <AuthField type={AuthType.SignUp} />;
};

export default SignUp;
