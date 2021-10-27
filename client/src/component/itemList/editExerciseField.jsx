import React, { useEffect } from "react";
import { useState } from "react";
import { TextField, Box, Select, MenuItem, Button } from "@mui/material";

const EditExerciseField = ({
  name,
  type,
  changeFunc,
  id,
  delFunc,
  index,
  sortUp,
  sortDown,
  lastElem,
}) => {
  const [exercise, setExercise] = useState({
    id: id,
    name: name,
    type: type,
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;
    setExercise({ ...exercise, [name]: val });
  };

  useEffect(() => {
    changeFunc(exercise);
  }, [exercise.name, exercise.name, exercise, changeFunc]);

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
        }}
        noValidate
        autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Exercise Name"
          value={exercise.name}
          name="name"
          onChange={handleChange}
        />

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={exercise.type}
          onChange={handleChange}
          name="type"
          label="Type">
          <MenuItem value="Select type" disabled>
            Select type
          </MenuItem>
          <MenuItem value="Kg">Kg</MenuItem>
          <MenuItem value="Km">Km</MenuItem>
          <MenuItem value="number of times">number of times</MenuItem>
        </Select>

        <Button
          variant="contained"
          onClick={() => sortUp(index)}
          disabled={index === 0 ? true : false}>
          Up
        </Button>

        <Button
          variant="contained"
          onClick={() => sortDown(index)}
          disabled={index === lastElem ? true : false}>
          Down
        </Button>

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => delFunc(id)}>
          Delete
        </Button>
      </Box>
    </>
  );
};

export default EditExerciseField;
