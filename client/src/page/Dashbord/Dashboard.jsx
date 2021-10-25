import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../redux/selectors.js";
import { getAllExercise } from "../../redux/action";
const Dashboard = () => {
  const currUser = useSelector(currentUser);
  const dispatch = useDispatch();

  const getExercise = () => {
    dispatch(getAllExercise());
  };
  return currUser ? (
    <div>
      <h1>Dashboard</h1>
      <button onClick={getExercise}>Click and get exercise</button>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default Dashboard;
