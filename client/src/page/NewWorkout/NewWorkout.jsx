import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { exerciseList, exerciseIsLoad, currData } from "../../redux/selectors";
import { Box, Button } from "@mui/material/";
import { createWorkout, getAllExercise } from "../../redux/action";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Loader from "../../component/Loader";
import CreateWorkout from "../../component/createWorkout";

const NewWorkout = () => {
  const style = {
    marginTop: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "60vh",
  };

  const butStyle = { mt: 3, mb: 2, width: 180 };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllExercise());
  }, [dispatch]);

  const allExercise = useSelector(exerciseList);
  const isLoad = useSelector(exerciseIsLoad);
  const currentData = useSelector(currData);
  console.log("allExercise", allExercise);
  const [workout, setWorkout] = useState({
    data: currentData,
    exerciseList: [],
  });

  const addExercise = () => {
    const keyData = new Date().getTime();

    const updateWorkout = {
      ...workout,
      exerciseList: [
        ...workout.exerciseList,
        {
          repeats: 0,
          measurement: 0,
          exerciseId: allExercise[0]._id,
          id: keyData,
        },
      ],
    };

    setWorkout(updateWorkout);
  };

  const changeExercise = (exercise) => {
    const newArray = [...workout.exerciseList];
    const result = newArray.find((elem) => elem.id === exercise.id);
    result.repeats !== exercise.repeats && (result.repeats = exercise.repeats);

    result.measurement !== exercise.measurement &&
      (result.measurement = exercise.measurement);

    result.exerciseId !== exercise.exerciseId &&
      (result.exerciseId = exercise.exerciseId);
  };

  const createNewWorkout = () => {
    dispatch(createWorkout(workout));
  };

  return (
    <Box component="main" sx={{ backgroundColor: "#f4f4f4", width: "100%" }}>
      <Header name="Create Workout" />
      {isLoad ? (
        <Loader />
      ) : (
        <Box sx={style}>
          <Button variant="contained" sx={butStyle} onClick={addExercise}>
            Add exercise
          </Button>

          {workout.exerciseList.length ? (
            workout.exerciseList.map((item) => (
              <CreateWorkout
                key={item.id}
                exercise={item}
                allExer={allExercise}
                changeExercise={changeExercise}
              />
            ))
          ) : (
            <div>No Exercise</div>
          )}

          <Button variant="contained" sx={butStyle} onClick={createNewWorkout}>
            Create Workout
          </Button>
        </Box>
      )}

      <Footer />
    </Box>
  );
};

export default NewWorkout;
