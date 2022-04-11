import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import * as startOfDay from "date-fns";

function Education({ handleNext, setEducation }) {
  const [value, setValue] = React.useState(null);
  const [evalue, setEvalue] = React.useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitData = (data) => {
    reset();
    handleNext();
    const finalData = {
      ...data,
      startDate: value,
      endDate: evalue,
    };
    console.log(finalData);
    setEducation(finalData);
  };

  return (
    <Box component="form" className="container mt-5" style={{ width: "75%" }} onSubmit={handleSubmit(submitData)}>
      <Box component="div" className="row justify-content-between">
        <TextField
          label="Institution"
          placeholder="e.g. Anna University"
          variant="outlined"
          {...register("institution", { required: true })}
          error={errors.institution ? true : false}
          style={{ width: "300px" }}
        />
        <TextField
          label="Institution Location"
          placeholder="e.g. Chennai"
          variant="outlined"
          {...register("location", { required: true })}
          error={errors.location ? true : false}
          style={{ width: "300px" }}
        />
      </Box>
      <Box component="div" className="row justify-content-between mt-5">
        <TextField
          label="Degree"
          placeholder="e.g. Bachelor's"
          variant="outlined"
          {...register("degree", { required: true })}
          error={errors.degree ? true : false}
          style={{ width: "300px" }}
        />
        <TextField
          label="Field of Study"
          placeholder="e.g. Mechanical Engineering"
          variant="outlined"
          {...register("study", { required: true })}
          error={errors.study ? true : false}
          style={{ width: "300px" }}
        />
      </Box>
      <Box component="div" className="row justify-content-between mt-5">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Graduation Start Date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} style={{ width: "300px" }} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Graduation End Date"
            value={evalue}
            onChange={(newValue) => {
              setEvalue(newValue);
            }}
            renderInput={(params) => <TextField {...params} style={{ width: "300px" }} />}
          />
        </LocalizationProvider>
      </Box>
      <Box component="div" className="row justify-content-center mt-5 ">
        <Button type="submit" variant="contained" style={{ width: "40px", marginLeft: "20px" }}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default Education;
