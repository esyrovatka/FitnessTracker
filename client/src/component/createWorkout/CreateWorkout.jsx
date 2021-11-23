import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Select,
  MenuItem,
  TextField,
  Typography,
  FormControl,
  Button,
} from "@mui/material";
import { useState } from "react";
import ButtonList from "../EditExerciseComponent/ButtonList";

const CreateWorkout = ({
  exercise,
  allExer,
  changeExercise,
  index,
  setWorkout,
  workout,
  deleteExercise,
}) => {
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
    const changeExerciseId = allExer.find(
      (item) => item.name === event.target.value
    );
    setCurrExer({ ...currExer, exerciseId: changeExerciseId._id });
  };

  useEffect(() => {
    changeExercise(currExer);
  }, [changeExercise, currExer]);

  const sort = (index, type) => {
    const newArr = [...workout.exerciseList];
    type === "Up" &&
      ([newArr[index], newArr[index - 1]] = [newArr[index - 1], newArr[index]]);

    type === "Down" &&
      ([newArr[index], newArr[index + 1]] = [newArr[index + 1], newArr[index]]);

    const updateWorkout = {
      ...workout,
      exerciseList: newArr,
    };

    setWorkout(updateWorkout);
  };

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

      <ButtonList index={index} list={workout.exerciseList} sort={sort} />

      <Button variant="contained" onClick={() => deleteExercise(currExer)}>
        Delete
      </Button>

      <Typography sx={textFieldStyle}>{currExercise.type}</Typography>
    </FormControl>
  );
};

CreateWorkout.defaultProps = {
  deleteExercise: () => {},
  allExer: [],
  changeExercise: () => {},
  index: null,
  setWorkout: () => {},
  workout: {},
  exercise: {},
};

CreateWorkout.propTypes = {
  deleteExercise: PropTypes.func,
  changeExercise: PropTypes.func,
  setWorkout: PropTypes.func,
  allExer: PropTypes.array,
  index: PropTypes.number,
  workout: PropTypes.object,
  exercise: PropTypes.object,
};

export default CreateWorkout;
