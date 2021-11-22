import React from "react";
import { useState } from "react";
import CreateForm from "./CreateForm";
import { useDispatch } from "react-redux";
import { createNewExercise } from "../../redux/action";
import ModalComponent from "../ModalComponent";
import { Typography } from "@mui/material";
const CreateFormContainer = ({ name, type }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    type: "",
    error: "",
  });
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;
    setForm({ ...form, [name]: val });
  };

  const submitFunc = (event) => {
    event.preventDefault();
    if (form.name.length && form.type.length) {
      dispatch(createNewExercise(form));
      setForm({ ...form, name: "", type: "", error: "" });

      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 500);
    } else {
      setForm({ ...form, error: "you need to fill in all the fields" });
    }
  };

  return (
    <>
      <ModalComponent openModal={open} name="Exercise Create!" />
      <CreateForm
        handleChange={handleChange}
        form={form}
        name={name}
        type={type}
        submitFunc={submitFunc}
      />
      {!!form.error.length && (
        <Typography sx={{ color: "red" }}>{form.error}</Typography>
      )}
    </>
  );
};

export default CreateFormContainer;
