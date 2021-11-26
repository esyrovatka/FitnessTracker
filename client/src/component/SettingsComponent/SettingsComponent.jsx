import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";

const SettingsComponent = ({
  name,
  placeholder,
  isPassword,
  changeHandler,
  user,
  label,
  blurHandler,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Typography sx={{ display: "flex", alignItems: "center", width: 200 }}>
        {label}
      </Typography>
      <TextField
        sx={{ wisth: 200 }}
        margin="normal"
        label={name}
        name={name}
        placeholder={placeholder}
        onChange={changeHandler}
        value={user[name]}
        type={isPassword ? "password" : "text"}
        onBlur={blurHandler}
      />
    </Box>
  );
};

export default SettingsComponent;
