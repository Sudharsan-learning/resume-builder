import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

function Contact({ handleNext, setContact }) {
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
    setContact(data);
  };

  return (
    <Box component="form" className="container mt-5" style={{ width: "75%" }} onSubmit={handleSubmit(submitData)}>
      <Box component="div" className="row justify-content-between">
        <TextField
          label="First Name"
          placeholder="e.g. Sudharsan"
          variant="outlined"
          {...register("fname", { required: true })}
          error={errors.fname ? true : false}
          style={{ width: "300px" }}
        />
        <TextField
          label="Surname"
          placeholder="e.g. Anbarasan"
          variant="outlined"
          {...register("sname", { required: true })}
          error={errors.sname ? true : false}
          style={{ width: "300px" }}
        />
      </Box>
      <Box component="div" className="row justify-content-between mt-5">
        <TextField
          label="City"
          variant="outlined"
          placeholder="e.g. Chennai"
          {...register("city", { required: true })}
          error={errors.city ? true : false}
          style={{ width: "300px" }}
        />
        <TextField
          label="Country"
          variant="outlined"
          placeholder="e.g. India"
          {...register("country", { required: true })}
          error={errors.country ? true : false}
          style={{ width: "250px" }}
        />
        <TextField
          label="Pin Code"
          variant="outlined"
          placeholder="e.g. 600 014"
          {...register("pin", { required: true })}
          error={errors.pin ? true : false}
          style={{ width: "150px" }}
        />
      </Box>
      <Box component="div" className="row justify-content-between mt-5">
        <TextField
          label="Phone"
          placeholder="e.g. +91 90xxx xxx82"
          variant="outlined"
          {...register("phone", { required: true })}
          error={errors.phone ? true : false}
          style={{ width: "300px" }}
        />
        <TextField
          label="Email"
          placeholder="e.g. sudharsan@xxxx.com"
          variant="outlined"
          {...register("email", { required: true })}
          error={errors.email ? true : false}
          style={{ width: "300px" }}
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

export default Contact;
