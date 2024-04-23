import React, { useState } from "react";
import GradientInput from "./GradientInput";
import "../css/form.css";
import "../css/common.css";

const DoctorForms = ({ handleEdit, doctor }) => {
  const [selectedDate, setSelectedDate] = useState(doctor.dateofjoining);
  const [gender, setGender] = useState(doctor.gender);
  const [phone, setPhone] = useState(doctor.mobileno);
  const [name, setName] = useState(doctor.name);
  const [address, setAddress] = useState(doctor.workingaddress);
  const [pincode, setPincode] = useState(doctor.pinecode);
  const [blockCode, setBlockCode] = useState(doctor.blockCode);
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleBlockCode = (event) => {
    setBlockCode(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
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
  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a doctor object with the updated form data
    const updatedDoctor = {
      name: name,
      gender: gender,
      mobileno: phone,
      specialization: doctor.specialization,
      workingaddress: address,
      blockCode: blockCode,
      countofpatient: doctor.countofpatient,
      dateofjoining: selectedDate,
      doctorId: doctor.doctorId,
      pinecode: pincode,
    };
    // Call the handleEdit function with the updated doctor object
    handleEdit(updatedDoctor);
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

        {/* Date Picker */}
        <GradientInput
          type="date"
          name="dateOfjoining"
          value={selectedDate}
          onChange={handleDateChange}
          className="input-styles date-picker"
        />

        {/* Gender Selector */}
        <br />
        <div style={{ width: "50%" }}>
          <select
            name="gender"
            value={gender}
            onChange={handleGenderChange}
            className="form__field "
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <br />
        <GradientInput
          type="text"
          name="blockCode"
          placeholder="blockCode"
          className="input-styles"
          value={blockCode}
          onChange={handleBlockCode}
        />
        <GradientInput
          type="text"
          name="Address"
          placeholder="Address"
          className="input-styles"
          value={address}
          onChange={handleAddressChange}
        />
        <GradientInput
          type="text"
          name="Pincode"
          placeholder="Pincode"
          className="input-styles"
          value={pincode}
          onChange={handlePincodeChange}
        />
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

export default DoctorForms;
