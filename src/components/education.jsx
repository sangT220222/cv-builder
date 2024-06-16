import React, { useState } from "react";

function Education({ education, onExperienceChange }) {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState(education);
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
            Title
            <input
              type="text"
              name="title"
              value={info.title}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            School Name
            <input
              type="text"
              name="schoolName"
              value={info.schoolName}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Study Dates
            <input
              type="date"
              name="studyDate"
              value={info.studyDate}
              onChange={handleChange}
            ></input>
          </label>
          <button onClick={handleSubmit}> Submit </button>
        </div>
      ) : (
        <div>
          <p>Title: {info.title}</p>
          <p>School Name: {info.schoolName}</p>
          <p>Study dates: {info.studyDate}</p>
          <button onClick={handleEdit}> Edit </button>
        </div>
      )}
    </div>
  );
}

export default Education;
