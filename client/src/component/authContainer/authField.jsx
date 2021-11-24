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

const AuthField = ({
  submitFunc,
  handleChange,
  user,
  helpLink,
  type,
  disableForm,
  errorMessage,
}) => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 25,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
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

        {errorMessage === 401 && (
          <Typography component="p" sx={{ color: "red" }}>
            Email or Password is not correct
          </Typography>
        )}
        {errorMessage === 406 && (
          <Typography component="p" sx={{ color: "red" }}>
            Email is already in use
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
            ? "Don't have an account? Sign Up"
            : "Have an account? Sign In"}
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
