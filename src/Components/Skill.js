import * as React from "react";
import { Box, Button } from "@mui/material";
import ChipInput from "material-ui-chip-input";

export default function Skill({ handleNext, setSkill }) {
  const [disable, setDisable] = React.useState(true);
  const getValue = (data) => {
    if (!data) {
      setDisable(true);
    }
    console.log("data", data);
    setSkill(data);
    setDisable(false);
  };
  return (
    <>
      <Box component="div" className="row justify-content-center mt-5">
        <ChipInput onChange={getValue} label="Skills" placeholder="e.g. React" style={{ width: "500px" }} />
      </Box>
      <Box component="div" className="row justify-content-center mt-5 ">
        <Button type="submit" variant="contained" disabled={disable} onClick={handleNext} style={{ width: "40px", marginLeft: "20px" }}>
          Next
        </Button>
      </Box>
    </>
  );
}
