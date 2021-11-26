import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import update from "immutability-helper";
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
// import CreateWorkoutContainer from "../../component/CreateWorkoutContainer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
import exerciseValidation from "../../utils/exerciseValidation";
import CreateWorkoutComponent from "../../component/CreateWorkoutContainer/CreateWorkoutComponent";

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

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = workout.exerciseList[dragIndex];

      setWorkout({
        ...workout,
        exerciseList: update(workout.exerciseList, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
      });
    },

    [setWorkout, workout]
  );

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
            <DndProvider backend={HTML5Backend}>
              <CreateWorkoutComponent
                workout={workout}
                list={workout.exerciseList}
                updList={setWorkout}
                deleteExercise={deleteExercise}
                allExer={allExercise}
                changeExercise={changeExercise}
                setValidWorkout={setValidWorkout}
                moveCard={moveCard}
              />
            </DndProvider>
          ) : (
            <div>Add exercise to workout</div>
          )}

          {!validWorkout && (
            <Typography sx={{ color: "red" }}>
              please enter correct info
            </Typography>
          )}
          <Button
            variant="contained"
            sx={butStyle}
            onClick={createNewWorkout}
            disabled={
              validWorkout && workout.exerciseList.length ? false : true
            }
            // disabled={workout.exerciseList.length ? false : true}
          >
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
