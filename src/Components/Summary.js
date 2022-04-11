import { Box, Button, TextareaAutosize, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

function Summary({ setSummary, handleNext }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitData = (data) => {
    console.log(data);
    reset();
    handleNext();
    setSummary(data);
  };
  return (
    <Box component="form" className="container mt-5" style={{ width: "75%" }} onSubmit={handleSubmit(submitData)}>
      <Box component="div" className="row justify-content-center mt-5">
        <TextareaAutosize
          aria-label="minimum height"
          minRows={5}
          placeholder="Profile Summary"
          style={{ width: "100%" }}
          className="form-control"
          required
          {...register("textarea", { required: true })}
        />
      </Box>
      <Box component="div" className="row justify-content-center mt-5 ">
        <Button type="submit" variant="contained" style={{ width: "40px", marginLeft: "20px" }}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default Summary;
