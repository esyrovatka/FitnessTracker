import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { TextField, Select, MenuItem } from "@mui/material/";
const ExerciseList = ({ item, changeExercise }) => {
  const [exercise, setExercise] = useState({
    id: item._id,
    name: item.name,
    type: item.type,
  });

  const handleChange = (event) => {
    setExercise({ ...exercise, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    changeExercise(exercise); // eslint-disable-next-line
  }, [exercise.name, exercise.type, exercise]);

  return (
    <>
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
    </>
  );
};

ExerciseList.defaultProps = {
  changeExercise: () => {},
  item: {},
};

ExerciseList.propTypes = {
  changeExercise: PropTypes.func,
  item: PropTypes.object,
};
export default ExerciseList;
