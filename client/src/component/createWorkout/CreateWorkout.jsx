import {
  Select,
  MenuItem,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";

const CreateWorkout = ({ exercise, allExer, changeExercise }) => {
  const textFieldStyle = {
    width: 150,
    padding: "0px 10px",
  };
  const [currExer, setCurrExer] = useState(exercise);

  useEffect(() => {
    setCurrExer(exercise);
  }, [exercise]);

  const handleChange = (event) => {
    const val = event.target.value;
    const name = event.target.name;
    setCurrExer({ ...currExer, [name]: val });
  };

  const exerciseChange = (event) => {
    const changeExercise = allExer.find(
      (item) => item.name === event.target.value
    );
    setCurrExer({ ...currExer, exerciseId: changeExercise._id });
  };

  useEffect(() => {
    changeExercise(currExer);
  }, [changeExercise, currExer]);

  const currExercise = allExer.find((item) => item._id === currExer.exerciseId);
  return (
    <FormControl
      sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Select
        sx={textFieldStyle}
        value={currExercise.name}
        name="exerciseId"
        onChange={exerciseChange}>
        {allExer.map((item) => (
          <MenuItem key={item._id} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>

      <TextField
        sx={textFieldStyle}
        required
        name="repeats"
        value={currExer.repeats}
        label="repeats"
        onChange={handleChange}
      />

      <TextField
        sx={textFieldStyle}
        required
        name="measurement"
        value={currExer.measurement}
        label="measurement"
        onChange={handleChange}
      />

      <Typography sx={textFieldStyle}>{currExercise.type}</Typography>
    </FormControl>
  );
};

export default CreateWorkout;
