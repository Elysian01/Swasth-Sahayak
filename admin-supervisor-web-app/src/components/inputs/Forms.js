import React, { useState } from "react";
import "../css/form.css";
import "../css/common.css";

const Forms = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email) && validatePhone(phone)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (validateEmail(email) && !validatePhone(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }
    if (!validatePhone(phone) && !validateEmail(email)) {
      alert("Please enter a valid phone number and email address.");
      return;
    }
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    // Regular expression to validate phone number (10 digits)
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  return (
    <div>
      <form className="form-style" onSubmit={handleSubmit}>
        <div className="user-name">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input-styles"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input-styles"
          />
        </div>
        <div className="dropdowns">
          {/* Date Picker */}
          <input
            type="date"
            name="dateOfBirth"
            value={selectedDate}
            onChange={handleDateChange}
            className="input-styles date-picker"
          />

          {/* Gender Selector */}
          <select name="gender" value={gender} onChange={handleGenderChange} className="input-styles">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <input type="text" name="address" placeholder="Address" className="input-styles" />
        <div className="personal-details">
          <input
            type="text"
            name="mobile"
            placeholder="Enter your 10-digit mobile number"
            className="input-styles"
            value={phone}
            onChange={handlePhoneChange}
          />
          <input
            type="text"
            name="emailAddress"
            placeholder="Email Address"
            className="input-styles"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button type="submit" className="primary-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
