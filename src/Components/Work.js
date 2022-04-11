import { Box, Button, TextareaAutosize, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import * as startOfDay from "date-fns";

function Work({ setWork, handleNext }) {
  const [value, setValue] = React.useState(null);
  const [evalue, setEvalue] = React.useState(null);

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
    const finalData = {
      ...data,
      startDate: value,
      endDate: evalue,
    };
    console.log(finalData);
    setWork(finalData);
  };
  return (
    <Box component="form" className="container mt-5" style={{ width: "75%" }} onSubmit={handleSubmit(submitData)}>
      <Box component="div" className="row justify-content-between">
        <TextField
          label="Job Tilte"
          placeholder="e.g. Front End Developer"
          variant="outlined"
          {...register("jobTilte", { required: true })}
          error={errors.jobTilte ? true : false}
          style={{ width: "300px" }}
        />
        <TextField
          label="Organisation"
          placeholder="e.g. XXXX technologies"
          variant="outlined"
          {...register("organisation", { required: true })}
          error={errors.organisation ? true : false}
          style={{ width: "300px" }}
        />
      </Box>
      <Box component="div" className="row justify-content-between mt-5">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Start Date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            // {...register("sdate", { required: true })}
            renderInput={(params) => <TextField {...params} style={{ width: "300px" }} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="End Date"
            value={evalue}
            onChange={(newValue) => {
              setEvalue(newValue);
            }}
            // {...register("edate", { required: true })}
            renderInput={(params) => <TextField {...params} style={{ width: "300px" }} />}
          />
        </LocalizationProvider>
      </Box>
      <Box component="div" className="row justify-content-center mt-5">
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Minimum 3 rows"
          style={{ width: "100%" }}
          className="form-control"
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

export default Work;
