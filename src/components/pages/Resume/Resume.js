import React from "react";
import Skills from "../Skills";

function Resume() {
  return (
    <div className="resume mt-10">
      <h1>My Resume</h1>
      <button>Click here to download</button>
      <h2>My Proficiencies</h2>
      <Skills />
    </div>
  );
}

export default Resume;
