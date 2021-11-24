import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  exerciseList,
  exerciseIsLoad,
  currData,
  isAuthorized,
} from "../../redux/selectors";
import { Box, Button, Typography } from "@mui/material/";
import { createWorkout, getAllExercise } from "../../redux/action";
import Header from "../../component/Header";
import Loader from "../../component/Loader";
import CreateWorkout from "../../component/CreateWorkout";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
import exerciseValidation from "../../utils/exerciseValidation";

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
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllExercise());
  }, [dispatch]);

  const allExercise = useSelector(exerciseList);
  const isLoad = useSelector(exerciseIsLoad);
  const currentData = useSelector(currData);
  const isAuth = useSelector(isAuthorized);

  const [workout, setWorkout] = useState({
    data: currentData,
    exerciseList: [],
  });

  const [validWorkout, setValidWorkout] = useState(true);

  const addExercise = () => {
    const keyData = new Date().getTime();
    if (allExercise[0]) {
      const updateWorkout = {
        ...workout,
        exerciseList: [
          ...workout.exerciseList,
          {
            repeats: 1,
            measurement: 1,
            exerciseId: allExercise[0]._id,
            id: keyData,
          },
        ],
      };

      setWorkout(updateWorkout);
    } else {
      history.push("/exercise");
    }
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
    exerciseValidation(workout.exerciseList)
      ? setValidWorkout(false)
      : dispatch(createWorkout(workout)) && history.push("/");
  };

  const deleteExercise = (currExer) => {
    const newList = workout.exerciseList.filter(
      (item) => item.id !== currExer.id
    );
    const updateWorkout = {
      ...workout,
      exerciseList: newList,
    };

    setWorkout(updateWorkout);
  };

  return isAuth ? (
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
            workout.exerciseList.map((item, index) => (
              <CreateWorkout
                key={item.id}
                exercise={item}
                allExer={allExercise}
                changeExercise={changeExercise}
                index={index}
                exerciseList={workout.exerciseList}
                setWorkout={setWorkout}
                workout={workout}
                deleteExercise={deleteExercise}
              />
            ))
          ) : (
            <div>No Exercise</div>
          )}
          {!validWorkout && (
            <Typography sx={{ color: "red" }}>
              please enter correct info
            </Typography>
          )}
          <Button variant="contained" sx={butStyle} onClick={createNewWorkout}>
            Create Workout
          </Button>
        </Box>
      )}
    </Box>
  ) : (
    <Redirect to="/login" />
  );
};

export default NewWorkout;
