import React, { useState } from "react";

import GradientInput from "./GradientInput";

import "../css/form.css";
import "../css/common.css";

const SupervisorForms = ({ handleEdit, fieldworker }) => {
  const [gender, setGender] = useState(fieldworker.gender);
  const [phone, setPhone] = useState(fieldworker.mobileno);
  const [name, setName] = useState(fieldworker.name);
  const [phoneError, setPhoneError] = useState('');


  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePhoneChange = (event) => {

  const value = event.target.value;
  const re = /^[0-9\b]+$/; // Regular expression to allow only numbers

  // Allow backspace and delete for editing
  if (value === '' || re.test(value)) {
    if (value.length <= 10) {
      setPhone(value);
      setPhoneError(''); // Clear any existing error
    } else {
      setPhoneError('Please enter a correct 10-digit mobile number.');
    }
  }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (phone.length !== 10) {
      setPhoneError('Please enter a correct 10-digit mobile number.');
      return; // Prevent form submission if phone number is invalid
    }
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
      <style>
        {`
          .error-message {
            color: #ff0000; /* Red color for the error message */
            background-color: #ffebeb; /* Light red background */
            border: 1px solid #ff0000; /* Red border */
            padding: 10px;
            margin-top: 10px;
            border-radius: 5px;
            text-align: left;
          }
        `}
      </style>
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
        {phoneError && <div className="error-message">{phoneError}</div>}
        <button type="submit" className="primary-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SupervisorForms;
