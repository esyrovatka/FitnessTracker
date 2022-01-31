import * as React from "react";
import styled from "styled-components";
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
  return (
    <AuthPage>
      <Box className="form-group">
        <Box className="form-avatar">
          <Avatar className="form-avatar-icon">
            <LockOutlinedIcon />
          </Avatar>
          <Typography className="form-avatar-title" component="h1" variant="h5">
            {type}
          </Typography>
        </Box>
        <Box
          component="form"
          className="form-field"
          onSubmit={submitFunc}
          noValidate
          sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            placeholder="Example@gmail.com"
            name="email"
            autoFocus
            onChange={handleChange}
            value={user.email}
            autoComplete="off"
          />

          <TextField
            className="form-password"
            margin="normal"
            required
            fullWidth
            placeholder="******"
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
            className="form-auth-btn"
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
      </Box>
    </AuthPage>
  );
};

const AuthPage = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  .form-group {
    max-width: 300px;
    background-color: rgb(65, 58, 58, 0.6);
    margin: 50px;
    padding: 50px;
    border: 1px solid #21c9a6;
    .form-avatar {
      display: flex;
      flex-direction: column;
      align-items: center;
      .form-avatar-icon {
        margin: 10px;
        background-color: #21c9a6;
      }
      .form-avatar-title {
        color: #21c9a6;
        font-weight: 600;
      }
    }

    .form-field {
      label {
        color: #21c9a6;
      }
      .MuiOutlinedInput-input {
        color: #21c9a6;
      }
      .css-1kty9di-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
        color: #21c9a6;
      }
      .Mui-focused fieldset {
        border: 1px solid #21c9a6;
      }
    }
    .form-auth-btn {
      color: #fff;
      border: 1px solid #21c9a6;
    }
    .form-auth-btn:hover {
      color: #413a3a;
      font-weight: 900;
    }
    .css-1vhaqj4-MuiButtonBase-root-MuiButton-root {
      background-color: #21c9a6;
    }
    .css-1vhaqj4-MuiButtonBase-root-MuiButton-root:hover {
      box-shadow: 5px 3px 3px #000;
    }
    .Mui-disabled {
      background-color: rgb(65, 58, 58, 0.6);
    }
    .css-16cu1k8-MuiTypography-root-MuiLink-root {
      color: #21c9a6;
    }
  }
`;

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
