// @flow

import React from "react";
import type { Node } from "react";
import {
  Container,
  Box,
  Typography,
  Avatar,
  TextField,
  // FormControlLabel,
  // Checkbox,
  Button,
  Link,
} from "@mui/material/";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

type Props = {
  submitFunc: Function,
  handleChange: Function,
  user: Object,
  helpLink: Function,
  type: string,
  disableForm: boolean,
  errorMessage: number,
};

const AuthField = ({
  submitFunc,
  handleChange,
  user,
  helpLink,
  type,
  disableForm,
  errorMessage,
}: Props): Node => {
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
          autoComplete="email"
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
          autoComplete="current-password"
          onChange={handleChange}
          value={user.password}
        />

        {errorMessage === 401 && (
          <Typography component="p" sx={{ color: "red" }}>
            Email or Password in not correct
          </Typography>
        )}
        {errorMessage === 406 && (
          <Typography component="p" sx={{ color: "red" }}>
            Email is already in use
          </Typography>
        )}
        {/* <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        /> */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={disableForm}
          sx={{ mt: 3, mb: 2 }}>
          {type}
        </Button>
        <Link onClick={helpLink} variant="body2" sx={{ cursor: "pointer" }}>
          {type === "SignIn"
            ? "Don't have an account? Sign Up"
            : "Have an account? Sign In"}
        </Link>
      </Box>
    </Container>
  );
};

export default AuthField;
