import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material/";

const CreateForm = ({ name, submitFunc, type, form, handleChange }) => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography component="h1" variant="h5">
          New {name}
        </Typography>
      </Box>
      <Box component="form" onSubmit={submitFunc} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id={form.name}
          label={name + " Name"}
          name="name"
          autoComplete={name}
          autoFocus
          onChange={handleChange}
          value={form.name}
        />

        <InputLabel id="demo-simple-select-label">{type}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label={type}
          required
          name="type"
          fullWidth
          defaultValue="Select type"
          value={form.type}
          onChange={handleChange}>
          <MenuItem value="Select type" disabled>
            Select type
          </MenuItem>
          <MenuItem value="Kg">Kg</MenuItem>
          <MenuItem value="Km">Km</MenuItem>
          <MenuItem value="number of times">number of times</MenuItem>
        </Select>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}>
          Create {name}
        </Button>
      </Box>
    </Container>
  );
};

export default CreateForm;
