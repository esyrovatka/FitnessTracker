import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentUser } from "../../redux/selectors.js";
const Dashboard = () => {
  const currUser = useSelector(currentUser);
  return currUser ? <div>Dashboard</div> : <Redirect to="/login" />;
};

export default Dashboard;
