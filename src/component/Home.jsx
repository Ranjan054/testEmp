import React, { useState } from "react";
import EmployeeData from "./EmployeeData/EmployeeData";
import "./Home.css";

export const Home = () => {
  const [lastName, setLastName] = useState("kumar");
  const [name, setName] = useState("rahul");

  const updateValue = (e) => {
    if (e.target.name === "firstName") {
      setName(e.target.value);
    } else {
      setLastName(e.target.value);
    }
  };

  const addEmp = () => {};

  return (
    <div>
      <div id="empWrapper">
        <EmployeeData
          name={name}
          lastName={lastName}
          updateValue={updateValue}
        />
      </div>

      <div>
        <input
          name="firstName"
          type="text"
          value="test"
          placeholder="Enter your name"
          onChange={updateValue}
        />
        <input
          name="lastName"
          type="text"
          value="test"
          placeholder="Enter your lastname"
          onChange={updateValue}
        />{" "}
      </div>
      <button onClick={addEmp}>Add Employee</button>
    </div>
  );
};

export default Home;
