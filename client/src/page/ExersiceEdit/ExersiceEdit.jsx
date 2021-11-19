import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { exerciseList, exerciseIsLoad, workout } from "../../redux/selectors";
import { Box, Typography, Button } from "@mui/material/";
import EditExerciseComponent from "../../component/EditExerciseComponent";
import {
  delExercise,
  getAllExercise,
  getAllWorkout,
  updExercise,
} from "../../redux/action";
import Header from "../../component/Header";
import ModalComponent from "../../component/ModalComponent";
import Footer from "../../component/Footer";
import Loader from "../../component/Loader";

const ExersiceEdit = () => {
  const style = {
    marginTop: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "60vh",
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllExercise());
    dispatch(getAllWorkout());
  }, [dispatch]);

  const allExercise = useSelector(exerciseList);
  const allWorkout = useSelector(workout);
  const isLoad = useSelector(exerciseIsLoad);
  const [updateList, setUpdateList] = useState(allExercise);
  const [open, setOpen] = useState(false);
  const order = localStorage.Exercise_Order;
  const orderFilter = useCallback(() => {
    const result = JSON.parse(order);
    const newArr = [];

    for (let i = 0; i < allExercise.length; i++) {
      newArr.push(allExercise.find((item) => item._id === result[i]));
    }

    setUpdateList(newArr);
  }, [allExercise, order]);

  useEffect(() => {
    order ? orderFilter() : setUpdateList(allExercise);
  }, [orderFilter, allExercise, order]);

  const modalOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  const updateExercise = () => {
    dispatch(updExercise(updateList));
    const newArr = [];
    for (let i = 0; i < updateList.length; i++) {
      newArr.push(updateList[i]._id);
    }
    localStorage.setItem("Exercise_Order", JSON.stringify(newArr));
    modalOpen();
  };
  let dataexercise = [];
  const deleteExercise = (id) => {
    const result = allWorkout.map((item) =>
      item.exerciseList.filter((exerciseList) => exerciseList.exerciseId === id)
    );
    for (let i = 0; i < result.length; i++) {
      if (result[i].length) {
        dataexercise.push(
          "\u00A0" +
            "\u00A0" +
            new Date(allWorkout[i].data).getDate() +
            "/" +
            new Date(allWorkout[i].data).getMonth() +
            "/" +
            (new Date(allWorkout[i].data).getYear() + 1900)
        );
      }
    }
    if (dataexercise.length) {
      const vvod =
        "Please delete this exercise from workout at: " + dataexercise;
      alert(vvod);
      dataexercise = [];
    } else {
      dataexercise = [];
      dispatch(delExercise(id));
      modalOpen();
    }
  };

  const sort = (index, type) => {
    const newArr = [...updateList];
    type === "Up" &&
      ([newArr[index], newArr[index - 1]] = [newArr[index - 1], newArr[index]]);

    type === "Down" &&
      ([newArr[index], newArr[index + 1]] = [newArr[index + 1], newArr[index]]);

    setUpdateList(newArr);
  };

  return (
    <Box component="main" sx={{ backgroundColor: "#f4f4f4", width: "100%" }}>
      <ModalComponent openModal={open} name="Exercise Update!" />
      <Header name="Edit Exercise" />
      {isLoad ? (
        <Loader />
      ) : (
        <Box sx={style}>
          <Typography component="h1" variant="h5">
            Exersice Edit
          </Typography>

          <EditExerciseComponent
            list={updateList}
            updList={setUpdateList}
            sort={sort}
            deleteExercise={deleteExercise}
          />
          <Button
            variant="contained"
            sx={{ mt: 3, mb: 2, width: 140 }}
            onClick={updateExercise}>
            Update
          </Button>
        </Box>
      )}

      <Footer />
    </Box>
  );
};

export default ExersiceEdit;
