import React from "react";
import { useSelector } from "react-redux";
import AuthField from "../../component/auth";
import { currUserEmail } from "../../redux/selectors";

const VerificationEmail = () => {
  const currEmail = useSelector(currUserEmail);

  return <AuthField name="Verification" currEmail={currEmail} />;
};
export default VerificationEmail;
