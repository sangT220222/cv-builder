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
            Job Title:
            <input
              type="text"
              name="jobTitle"
              value={info.jobTitle}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Start Date:
            <input
              type="date"
              name="startDate"
              value={info.startDate}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            End Date:
            <input
              type="date"
              name="endDate"
              value={info.endDate}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Responsibilities:
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
          <p>Start date: {info.startDate}</p>
          <p>End date: {info.endDate}</p>
          <p>Responsibilites: {info.responsibilities}</p>
          <button onClick={handleEdit}> Edit </button>
        </div>
      )}
    </div>
  );
}

export default Experience;
