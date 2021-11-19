import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material/";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { useDispatch, useSelector } from "react-redux";
import { currData, exerciseList, workout } from "../../redux/selectors";
import CreateWorkout from "../../component/createWorkout";
import {
  delWorkout,
  getAllExercise,
  getAllWorkout,
  updateWorkout,
} from "../../redux/action";

const WorkoutEdit = () => {
  const butStyle = { m: 5, width: 180, padding: "20px" };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllExercise());
    dispatch(getAllWorkout());
  }, [dispatch]);

  const allExercise = useSelector(exerciseList);
  const allWorkout = useSelector(workout);
  const currWorkoutDate = useSelector(currData);
  const [currWorkout, setCurrWorkout] = useState(); // curr data workout

  useEffect(() => {
    const result =
      allWorkout &&
      allWorkout.find(
        (item) =>
          new Date(item.data).getDate() === currWorkoutDate.getDate() &&
          new Date(item.data).getMonth() === currWorkoutDate.getMonth()
      );
    setCurrWorkout(result);
  }, [currWorkoutDate, allWorkout]);

  const changeExercise = (exercise) => {
    const newArray = [...currWorkout.exerciseList];
    const result = newArray.find((elem) => elem._id === exercise._id);
    result.repeats !== exercise.repeats && (result.repeats = exercise.repeats);
    result.measurement !== exercise.measurement &&
      (result.measurement = exercise.measurement);

    result.exerciseId !== exercise.exerciseId &&
      (result.exerciseId = exercise.exerciseId);
  };

  const editWorkout = () => {
    dispatch(updateWorkout(currWorkout));
  };

  const deleteWorkout = () => {
    dispatch(delWorkout(currWorkout));
  };

  const deleteExercise = (currExer) => {
    const newList = currWorkout.exerciseList.filter(
      (item) => item._id !== currExer._id
    );
    const updateWorkout = {
      ...currWorkout,
      exerciseList: newList,
    };

    setCurrWorkout(updateWorkout);
  };

  return (
    <Box component="main" sx={{ backgroundColor: "#f4f4f4", width: "100%" }}>
      <Header name="Edit Workout" />
      <Box
        sx={{
          marginTop: 25,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "60vh",
        }}>
        <Typography variant="h5" component="div">
          Workout at: {currWorkoutDate.getDate()}.{currWorkoutDate.getMonth()}.
          {currWorkoutDate.getYear() + 1900}
        </Typography>

        {currWorkout &&
          currWorkout.exerciseList.map((item, index) => (
            <CreateWorkout
              key={item._id}
              index={index}
              exercise={item}
              allExer={allExercise}
              changeExercise={changeExercise}
              workout={currWorkout}
              setWorkout={setCurrWorkout}
              deleteExercise={deleteExercise}
            />
          ))}
        <Box>
          <Button variant="contained" sx={butStyle} onClick={editWorkout}>
            Edit Workout
          </Button>

          <Button variant="contained" sx={butStyle} onClick={deleteWorkout}>
            Delete Workout
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default WorkoutEdit;
