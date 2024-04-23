import React, { useState } from "react";
import "../css/form.css";
import "../css/common.css";

const Forms = ({ handleEdit, doctor }) => {
  const [selectedDate, setSelectedDate] = useState(doctor.dateofjoining);
  const [gender, setGender] = useState(doctor.gender);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(doctor.mobileno);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

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

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a doctor object with the updated form data
    const updatedDoctor = {
      name: doctor.name,
      gender: doctor.gender,
      mobileno: phone,
      specialization: doctor.specialization,
      workingaddress: address,
      blockCode: doctor.blockCode,
      countofpatient: doctor.countofpatient,
      dateofjoining: selectedDate,
      doctorId: doctor.doctorId,
      pincode: doctor.pinecode,
    };
    // Call the handleEdit function with the updated doctor object
    handleEdit(updatedDoctor);
  };

  return (
    <div>
      <form className="form-style" onSubmit={handleSubmit}>
        <div className="user-name">
          <input
            type="text"
            name="name"
            placeholder="First Name"
            className="input-styles"
            value={name}
            onChange={handleNameChange}
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
          <select
            name="gender"
            value={gender}
            onChange={handleGenderChange}
            className="input-styles"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="input-styles"
          value={address}
          onChange={handleAddressChange}
        />
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
