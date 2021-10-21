import React from "react";
import {
  Container,
  Box,
  Typography,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material/";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
const AuthField = ({ submitFunc, handleChange, user, helpLink, type }) => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
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
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
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
