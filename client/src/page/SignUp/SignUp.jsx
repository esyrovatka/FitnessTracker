import React from "react";
import AuthField from "../../component/authContainer";
import { AuthType } from "../../constants/Auth";

const SignUp = () => {
  return <AuthField type={AuthType.SignUp} />;
};

export default SignUp;
