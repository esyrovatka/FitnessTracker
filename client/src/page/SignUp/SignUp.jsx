import React from "react";
import AuthField from "../../component/AuthContainer";
import { AuthType } from "../../constants/Auth";

const SignUp = () => {
  return <AuthField type={AuthType.SignUp} />;
};

export default SignUp;
