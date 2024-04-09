import React, { useState } from "react";
import "../css/form.css";
import "../css/common.css";

const Forms = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [gender, setGender] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <form className="form-style">
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
            pattern="[0-9]{10}"
            placeholder="Enter your 10-digit mobile number"
            className="input-styles"
          />
          <input
            type="text"
            name="emailAddress"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            placeholder="email address"
            className="input-styles"
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
