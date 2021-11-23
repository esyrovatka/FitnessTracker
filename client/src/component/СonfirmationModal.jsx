import React from "react";
import PropTypes from "prop-types";
import { Modal, Typography, Box, Button } from "@mui/material/";
const СonfirmationModal = ({ open, handleClose, deleteExercise, id }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const confirm = async () => {
    await deleteExercise(id);
    handleClose();
  };

  return (
    <>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description">
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            This exercise is used in workout
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Are you sure want to delete this exercise? (it will be removed from
            all workouts)
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2, width: 140 }}
              onClick={confirm}>
              Yes
            </Button>
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2, width: 140 }}
              onClick={handleClose}>
              No
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

СonfirmationModal.defaultProps = {
  handleClose: () => {},
  deleteExercise: () => {},
  id: "",
  open: false,
};

СonfirmationModal.propTypes = {
  handleClose: PropTypes.func,
  deleteExercise: PropTypes.func,
  id: PropTypes.string,
  open: PropTypes.bool,
};

export default СonfirmationModal;
