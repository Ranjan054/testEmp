import React, { useState } from "react";
import "./EmployeeData.css";

const EmployeeData = ({ name, lastName, updateValue }) => {
  const [flag, setFlag] = useState(true);

  const editData = () => {
    setFlag(!flag);
  };

  return (
    <div className="emp-card">
      {flag ? (
        <div>
          <p>First Name: {name}</p>
          <p>Last Name: {lastName}</p>
          <p>DOB: 05-04-1998</p>
          <p>Designation: engineer</p>
          <p>Experience: 4year</p>
        </div>
      ) : (
        <div>
          <input
            name="firstName"
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => updateValue(e)}
          />
          <input
            name="lastName"
            type="text"
            value={lastName}
            placeholder="Enter your lastname"
            onChange={(e) => updateValue(e)}
          />
        </div>
      )}

      <button onClick={editData}> Update Data</button>
    </div>
  );
};

export default EmployeeData;
