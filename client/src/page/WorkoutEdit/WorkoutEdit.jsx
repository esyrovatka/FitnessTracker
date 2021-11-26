import React, { useCallback, useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography } from "@mui/material/";
import Loader from "../../component/Loader";
import Header from "../../component/Header";
import exerciseValidation from "../../utils/exerciseValidation";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import update from "immutability-helper";
import {
  delWorkout,
  getAllExercise,
  getAllWorkout,
  updateWorkout,
} from "../../redux/action";
import {
  currData,
  exerciseList,
  isAuthorized,
  workout,
  workoutIsLoad,
} from "../../redux/selectors";
import CreateWorkoutComponent from "../../component/CreateWorkoutContainer/CreateWorkoutComponent";

const WorkoutEdit = () => {
  const butStyle = { m: 5, width: 180, padding: "20px" };
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getAllExercise());
    dispatch(getAllWorkout());
  }, [dispatch]);

  const allExercise = useSelector(exerciseList);
  const allWorkout = useSelector(workout);
  const loading = useSelector(workoutIsLoad);
  const currWorkoutDate = useSelector(currData);
  const isAuth = useSelector(isAuthorized);

  const [currWorkout, setCurrWorkout] = useState(); // curr data workout
  const [validWorkout, setValidWorkout] = useState(true);

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
    const result = newArray.findIndex((elem) => elem._id === exercise._id);

    newArray[result] = exercise;
    setCurrWorkout({ ...currWorkout, exerciseList: newArray });
  };

  const editWorkout = () => {
    exerciseValidation(currWorkout.exerciseList)
      ? setValidWorkout(false)
      : dispatch(updateWorkout(currWorkout)) && history.push("/");
  };

  const deleteWorkout = () => {
    dispatch(delWorkout(currWorkout)) && history.push("/");
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

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = currWorkout.exerciseList[dragIndex];

      setCurrWorkout({
        ...currWorkout,
        exerciseList: update(currWorkout.exerciseList, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
      });
    },

    [setCurrWorkout, currWorkout]
  );

  return isAuth ? (
    !loading ? (
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
            Workout at: {currWorkoutDate.getDate()}.{currWorkoutDate.getMonth()}
            .{currWorkoutDate.getYear() + 1900}
          </Typography>

          {currWorkout && (
            <DndProvider backend={HTML5Backend}>
              <CreateWorkoutComponent
                workout={currWorkout}
                list={currWorkout.exerciseList}
                updList={setCurrWorkout}
                deleteExercise={deleteExercise}
                allExer={allExercise}
                changeExercise={changeExercise}
                setValidWorkout={setValidWorkout}
                moveCard={moveCard}
              />
            </DndProvider>
          )}

          {!validWorkout && (
            <Typography sx={{ color: "red" }}>
              please enter correct info
            </Typography>
          )}
          <Box>
            <Button
              variant="contained"
              sx={butStyle}
              onClick={editWorkout}
              disabled={validWorkout ? false : true}>
              Edit Workout
            </Button>

            <Button variant="contained" sx={butStyle} onClick={deleteWorkout}>
              Delete Workout
            </Button>
          </Box>
        </Box>
      </Box>
    ) : (
      <Loader />
    )
  ) : (
    <Redirect to="/login" />
  );
};

export default WorkoutEdit;
