import { Button } from "@mui/material";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import Pdf from "react-to-pdf";

function ResumeBuilder({ contact, work, education, skill, summary }) {
  const workStartDate = new Date(work.startDate.toLocaleDateString("en-US"));
  console.log(new Date(education.startDate).getFullYear());

  const ref = React.createRef();
  return (
    <>
      <Pdf targetRef={ref} filename="resume.pdf">
        {({ toPdf }) => (
          <div className="text-center mt-5">
            <Button variant="contained" startIcon={<DownloadIcon />} onClick={toPdf}>
              Download
            </Button>
          </div>
        )}
      </Pdf>

      <div class="rela-block page" ref={ref}>
        <div class="rela-block top-bar">
          <div class="caps name">
            <div class="abs-center">
              {contact.fname} {contact.sname}
            </div>
          </div>
        </div>
        <div class="side-bar">
          <div class="mugshot">
            <div class="logo">
              <svg viewbox="0 0 80 80" class="rela-block logo-svg">
                <path d="M 10 10 L 52 10 L 72 30 L 72 70 L 30 70 L 10 50 Z" stroke-width="2.5" fill="none" />
              </svg>
              <p class="logo-text">
                {String(contact.fname).charAt(0).toUpperCase()} {String(contact.sname).charAt(0).toUpperCase()}
              </p>
            </div>
          </div>
          <p>
            {contact.city}, {contact.country} - {contact.pin}
          </p>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
          <p class="rela-block caps side-header">SKILLS</p>
          {skill.map((skill) => {
            return <p class="rela-block list-thing">{skill}</p>;
          })}
        </div>
        <div class="rela-block content-container">
          <h2 class="rela-block caps title">{work.jobTilte}</h2>
          <div class="rela-block separator"></div>
          <div class="rela-block caps greyed">Profile</div>
          <p class="long-margin">{summary.textarea}</p>
          <div class="rela-block caps greyed">Experience</div>
          <h3>{work.jobTilte}</h3>
          <p class="light">{work.organisation} </p>
          <p class="justified">{work.textarea}</p>
          <div class="rela-block caps greyed">Education</div>
          <h3>{education.institution}</h3>
          <p class="light">
            {education.degree} - {education.study} {`(${new Date(education.startDate).getFullYear()} - ${new Date(education.endDate).getFullYear()})`}
          </p>
          <div class="rela-block caps greyed"></div>
          <br />
        </div>
      </div>
    </>
  );
}

export default ResumeBuilder;
