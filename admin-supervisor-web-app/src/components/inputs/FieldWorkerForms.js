import React, { useState } from "react";

import GradientInput from "./GradientInput";

import "../css/form.css";
import "../css/common.css";

const FieldWorkerForms = ({ handleEdit, fieldworker }) => {
  const [gender, setGender] = useState(fieldworker.gender);
  const [phone, setPhone] = useState(fieldworker.mobileno);
  const [name, setName] = useState(fieldworker.name);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a doctor object with the updated form data
    const updatedFieldWorker = {
      name: name,
      gender: gender,
      mobileno: phone,
    };
    // Call the handleEdit function with the updated doctor object
    handleEdit(updatedFieldWorker);
  };

  return (
    <div>
      <form className="form-style" onSubmit={handleSubmit}>
        <GradientInput
          type="text"
          name="name"
          placeholder="Name"
          className="input-styles"
          value={name}
          onChange={handleNameChange}
        />

        {/* Gender Selector */}
        <br />
        <div style={{ width: "50%" }}>
          <select
            name="gender"
            value={gender}
            onChange={handleGenderChange}
            className="form__field"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <GradientInput
          type="text"
          name="mobile"
          placeholder="Enter your 10-digit mobile number"
          className="input-styles"
          value={phone}
          onChange={handlePhoneChange}
        />

        <button type="submit" className="primary-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FieldWorkerForms;
