import React, { useCallback, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material/";
import { useDispatch, useSelector } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import {
  exerciseList,
  exerciseIsLoad,
  workout,
  isAuthorized,
} from "../../redux/selectors";
import {
  delExercise,
  getAllExercise,
  getAllWorkout,
  updExercise,
} from "../../redux/action";
import Header from "../../component/Header";
import ModalComponent from "../../component/ModalComponent";
import Loader from "../../component/Loader";
import СonfirmationModal from "../../component/СonfirmationModal";
import EditExerciseComponent from "../../component/EditExerciseComponent";

export const ExersiceEdit = () => {
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
  const isAuth = useSelector(isAuthorized);
  const [updateList, setUpdateList] = useState(allExercise);
  // info modal
  const [open, setOpen] = useState(false);
  const modalOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };
  // for СonfirmModal
  const [currExerciseId, setCurrExerciseId] = useState();
  const [openСonfirmationModal, setOpenСonfirmationModal] = useState(false);
  const handleClose = () => setOpenСonfirmationModal(false);

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

  const updateExercise = () => {
    dispatch(updExercise(updateList));
    const newArr = [];
    for (let i = 0; i < updateList.length; i++) {
      newArr.push(updateList[i]._id);
    }
    localStorage.setItem("Exercise_Order", JSON.stringify(newArr));
    modalOpen();
  };

  const deleteExercise = (id) => {
    setCurrExerciseId(id); // for confirm modal
    openСonfirmationModal && dispatch(delExercise(id));

    const result = allWorkout.map((item) =>
      item.exerciseList.filter((exerciseList) => exerciseList.exerciseId === id)
    );

    if (result.flat().length) {
      setOpenСonfirmationModal(true);
    } else {
      allWorkout.map((item) =>
        item.exerciseList.filter(
          (exerciseList) => exerciseList.exerciseId !== id
        )
      );
      dispatch(delExercise(id));
    }
  };

  // const disabl = () => !updateList.length
  // // {
  // //   if (updateList.length) {
  // //     return false;
  // //   } else {
  // //     return true;
  // //   }
  // // };
  return isAuth ? (
    <Box component="main" sx={{ backgroundColor: "#f4f4f4", width: "100%" }}>
      <ModalComponent openModal={open} name="Exercise Update!" />

      <СonfirmationModal
        open={openСonfirmationModal}
        handleClose={handleClose}
        deleteExercise={deleteExercise}
        id={currExerciseId}
      />

      <Header name="Edit Exercise" />
      {isLoad ? (
        <Loader />
      ) : (
        <Box sx={style}>
          <Typography component="h1" variant="h5">
            Exersice Edit
          </Typography>

          {updateList.length ? (
            <DndProvider backend={HTML5Backend}>
              <EditExerciseComponent
                list={updateList}
                updList={setUpdateList}
                deleteExercise={deleteExercise}
              />
            </DndProvider>
          ) : (
            <Typography component="h3">You need create exercise</Typography>
          )}

          <Button
            variant="contained"
            sx={{ mt: 3, mb: 2, width: 140 }}
            // disabled={disabl()}
            disabled={!updateList.length}
            onClick={updateExercise}>
            Update
          </Button>
        </Box>
      )}
    </Box>
  ) : (
    <Redirect to="/login" />
  );
};
