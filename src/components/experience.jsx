import React, { useState } from "react";

function Experience({ experience, onExperienceChange }) {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState(experience);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = () => {
    onExperienceChange(info);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="experience">
      <h2>Experience</h2>
      {isEditing ? (
        <div>
          <label>
            Job Title
            <input
              type="text"
              name="jobTitle"
              value={info.jobTitle}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Date of Work
            <input
              type="date"
              name="dateOfWork"
              value={info.dateOfWork}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Responsibilities
            <input
              type="text"
              name="responsibilities"
              value={info.responsibilities}
              onChange={handleChange}
            ></input>
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <p>Job Title: {info.jobTitle}</p>
          <p>Date of Work: {info.dateOfWork}</p>
          <p>Responsibilites: {info.responsibilities}</p>
          <button onClick={handleEdit}> Edit </button>
        </div>
      )}
    </div>
  );
}

export default Experience;
