import React, { useState } from "react";

function GeneralInfo({ generalInfo, onGeneralInfoChange }) {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState(generalInfo);

  const handleChange = (e) => {
    const { name, value } = e.target; //name corresponds the name attribute of the input field (name, email, phone)
    //value is the current value entered by user in the input field
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    //prevInfo is the previous state of setInfo,
    //...prevInfo creates a copy of the prevInfo object
    //[name] evaluates the value of the name variable can be either -> name email or phone
    //value is current value in the input field
  };

  const handleSubmit = () => {
    onGeneralInfoChange(info); //this updates the generalInfo state in parent component in App.jsx
    //info contains latest values of name, email and phone
    setIsEditing(false); //switches editing to display mode
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      {isEditing ? (
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={info.name}
              onChange={handleChange}
            ></input>
          </label>
          {/* user types into input field, which triggers handleChange to update info's state */}
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={info.email}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={info.phone}
              onChange={handleChange}
            ></input>
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <p>Name : {info.name};</p>
          <p>Email : {info.email}</p>
          <p>Phone number : {info.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;
