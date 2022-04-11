import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Contact from "./Components/Contact";
import Work from "./Components/Work";
import Education from "./Components/Education";
import Skill from "./Components/Skill";
import Summary from "./Components/Summary";
import ResumeBuilder from "./Components/ResumeBuilder";

const steps = ["HEADING", "WORK HISTORY", "EDUCATION", "SKILLS", "SUMMARY", "FINALIZE"];

export default function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [contact, setContact] = React.useState({});
  const [work, setWork] = React.useState({});
  const [education, setEducation] = React.useState({});
  const [skill, setSkill] = React.useState([]);
  const [summary, setSummary] = React.useState({});

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  return (
    <>
      <div className="container">
        <Typography variant="h5" component="h1" className="text-center mt-4">
          Let's create your resume!
        </Typography>
        <Container maxWidth="lg" className="mt-4">
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                // if (isStepOptional(index)) {
                //   labelProps.optional = <Typography variant="caption">Optional</Typography>;
                // }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {(() => {
                  switch (activeStep) {
                    case 0:
                      return <Contact handleNext={handleNext} setContact={setContact} />;
                    case 1:
                      return <Work handleNext={handleNext} setWork={setWork} />;
                    case 2:
                      return <Education handleNext={handleNext} setEducation={setEducation} />;
                    case 3:
                      return <Skill handleNext={handleNext} setSkill={setSkill} />;
                    case 4:
                      return <Summary handleNext={handleNext} setSummary={setSummary} />;
                    case 5:
                      return <ResumeBuilder contact={contact} work={work} education={education} skill={skill} summary={summary} />;
                    default:
                      return null;
                  }
                })()}
              </React.Fragment>
            )}
          </Box>
        </Container>
      </div>
    </>
  );
}
