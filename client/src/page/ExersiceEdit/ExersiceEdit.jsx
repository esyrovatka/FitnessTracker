import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { exerciseList, exerciseIsLoad } from "../../redux/selectors";
import { Box, Typography, Button, CircularProgress } from "@mui/material/";
import ItemList from "../../component/itemList/";
import { getAllExercise, updExercise } from "../../redux/action";
import Header from "../../component/Header";
import ModalComponent from "../../component/ModalComponent";
import Footer from "../../component/Footer";

const ExersiceEdit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllExercise());
  }, [dispatch]);

  const allExercise = useSelector(exerciseList);
  const isLoad = useSelector(exerciseIsLoad);
  const [updateList, setUpdateList] = useState(allExercise);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setUpdateList(allExercise);
  }, [allExercise]);

  const updateExercise = () => {
    console.log("gg", updateList);
    dispatch(updExercise(updateList));
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  return (
    <Box component="main" sx={{ backgroundColor: "#f4f4f4", width: "100%" }}>
      <ModalComponent openModal={open} name="Exercise Update!" />
      <Header name="Edit Exercise" />
      {isLoad ? (
        <Box
          sx={{
            height: "65vh",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}>
          <CircularProgress
            color="secondary"
            sx={{ width: "100px !important", height: "100px !important" }}
          />
        </Box>
      ) : (
        <Box
          sx={{
            marginTop: 25,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "60vh",
          }}>
          <Typography component="h1" variant="h5">
            Exersice Edit
          </Typography>

          <ItemList list={updateList} />
          <Button
            fullWidth
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
