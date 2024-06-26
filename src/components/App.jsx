import { useState } from "react";
import GeneralInfo from "./generalInfo";
import Education from "./education";
import Experience from "./experience";

import "../styles/App.css";

function App() {
  //General Info
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleGeneralInfo = (info) => {
    setGeneralInfo(info);
  };

  //Education
  const [education, setEducation] = useState({
    title: "",
    schoolName: "",
    startDate: "",
    endDate: "",
  });
  const handleEducationChange = (info) => {
    setEducation(info);
  };

  //Experience
  const [experience, setExperience] = useState({
    jobTitle: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
  });
  const handlexperienceChange = (info) => {
    setExperience(info);
  };
  return (
    <div className="app">
      <h1>CV Builder</h1>
      <GeneralInfo
        generalInfo={generalInfo}
        onGeneralInfoChange={handleGeneralInfo}
      />
      <Education
        education={education}
        onEducationChange={handleEducationChange}
      />
      <Experience
        experience={experience}
        onExperienceChange={handlexperienceChange}
      />
    </div>
  );
}

export default App;
