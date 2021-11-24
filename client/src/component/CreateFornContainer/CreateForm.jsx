import * as React from "react";
import PropTypes from "prop-types";
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
import { ExerciseMeasurement } from "../../constants/ExerciseMeasurement";

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
          <MenuItem value={ExerciseMeasurement.Select} disabled>
            {ExerciseMeasurement.Select}
          </MenuItem>
          <MenuItem value={ExerciseMeasurement.kg}>
            {ExerciseMeasurement.kg}
          </MenuItem>
          <MenuItem value={ExerciseMeasurement.km}>
            {ExerciseMeasurement.km}
          </MenuItem>
          <MenuItem value={ExerciseMeasurement.number}>
            {ExerciseMeasurement.number}
          </MenuItem>
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

CreateForm.defaultProps = {
  submitFunc: () => {},
  handleChange: () => {},
  form: {},
  type: "",
  name: "",
};

CreateForm.propTypes = {
  submitFunc: PropTypes.func,
  handleChange: PropTypes.func,
  form: PropTypes.object,
  type: PropTypes.string,
  name: PropTypes.string,
};
export default CreateForm;
