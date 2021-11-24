import * as React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Link,
} from "@mui/material/";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AuthType } from "../../constants/Auth";
import { ErrorMessage, HelpMessage } from "../../constants/ErrorMessage";

const AuthField = ({
  submitFunc,
  handleChange,
  user,
  helpLink,
  type,
  disableForm,
  errorMessage,
}) => {
  const style = {
    marginTop: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={style}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {type}
        </Typography>
      </Box>
      <Box component="form" onSubmit={submitFunc} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoFocus
          onChange={handleChange}
          value={user.email}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          onChange={handleChange}
          value={user.password}
        />

        {errorMessage === 404 && (
          <Typography component="p" sx={{ color: "red" }}>
            {ErrorMessage.Incorrect}
          </Typography>
        )}
        {errorMessage === 406 && (
          <Typography component="p" sx={{ color: "red" }}>
            {ErrorMessage.AlreadyUse}
          </Typography>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={disableForm}
          sx={{ mt: 3, mb: 2 }}>
          {type}
        </Button>
        <Link onClick={helpLink} variant="body2" sx={{ cursor: "pointer" }}>
          {type === AuthType.SignIn
            ? HelpMessage.CreateAcc
            : HelpMessage.LoginAcc}
        </Link>
      </Box>
    </Container>
  );
};

AuthField.defaultProps = {
  submitFunc: () => {},
  handleChange: () => {},
  helpLink: () => {},
  user: {},
  type: "",
  errorMessage: "",
};

AuthField.propTypes = {
  submitFunc: PropTypes.func,
  handleChange: PropTypes.func,
  helpLink: PropTypes.func,
  user: PropTypes.object,
  type: PropTypes.string,
  errorMessage: PropTypes.number,
  name: PropTypes.string,
};

export default AuthField;
