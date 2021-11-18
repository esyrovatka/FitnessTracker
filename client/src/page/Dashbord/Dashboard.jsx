import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currData, isAuthorized, workout } from "../../redux/selectors.js";
import { getAllExercise, getAllWorkout } from "../../redux/action";
import { Box, Typography, Button } from "@mui/material/";
import Header from "../../component/Header.jsx";
import Footer from "../../component/Footer.jsx";

import CalendarComponent from "../../component/CalendarComponent";
import WorkoutPreview from "../../component/WorkoutPreview";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Dashboard = () => {
  const style = {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "65vh",
  };
  const isAuth = useSelector(isAuthorized);
  const allWorkout = useSelector(workout);
  const currWorkoutDate = useSelector(currData);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllExercise());
    dispatch(getAllWorkout());
  }, [dispatch]);

  const [workoutData, setWorkoutData] = useState([]); //all workout data
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

  useEffect(() => {
    const filterData =
      allWorkout && allWorkout.map((item) => new Date(item.data));
    setWorkoutData(filterData);
  }, [allWorkout]);

  const createWorkoutLink = () => {
    history.push("/workout");
  };

  const editWorkoutLink = () => {
    history.push("/workout/edit");
  };

  return isAuth ? (
    <Box component="main" sx={{ backgroundColor: "#f4f4f4", width: "100%" }}>
      <Header name="Dashboard" />
      <Box sx={style}>
        <CalendarComponent workoutData={workoutData} />
        <Box>
          {currWorkout && (
            <Typography variant="h3" gutterBottom component="div">
              Workout Preview
            </Typography>
          )}

          {currWorkout ? (
            currWorkout.exerciseList.map((item, index) => (
              <WorkoutPreview key={item._id} exercise={item} index={index} />
            ))
          ) : (
            <>
              <div>workout for this day is not created</div>
              <Button size="small" onClick={createWorkoutLink}>
                Create Workout
              </Button>
            </>
          )}

          {currWorkout && (
            <Button size="small" onClick={editWorkoutLink}>
              Edit Workout
            </Button>
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  ) : (
    <Redirect to="/login" />
  );
};

export default Dashboard;
