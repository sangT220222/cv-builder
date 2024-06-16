import React, { useState } from "react";

function Education({ education, onEducationChange }) {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState(education);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = () => {
    onEducationChange(info);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="education">
      <h2>Education</h2>
      {isEditing ? (
        <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={info.title}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            School Name:
            <input
              type="text"
              name="schoolName"
              value={info.schoolName}
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
          <button onClick={handleSubmit}> Submit </button>
        </div>
      ) : (
        <div>
          <p>Title: {info.title}</p>
          <p>School Name: {info.schoolName}</p>
          <p>Start date: {info.startDate}</p>
          <p>End date: {info.endDate}</p>
          <button onClick={handleEdit}> Edit </button>
        </div>
      )}
    </div>
  );
}

export default Education;
