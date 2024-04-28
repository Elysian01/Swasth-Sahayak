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
  const [phoneError, setPhoneError] = useState('');
  const [pincodeError, setPincodeError] = useState('');
  const [blockCodeError, setBlockCodeError] = useState('');
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleBlockCode = (event) => {
    const value = event.target.value;
    const blockCodeRegex = /^[A-Za-z0-9]+$/; // Allow alphanumeric characters
    if (value === '' || (blockCodeRegex.test(value) && value.length <= 7)) {
      setBlockCode(value);
      setBlockCodeError('');
    } else {
      setBlockCodeError('Please enter a valid 7-character block code.');
    }
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    const phoneRegex = /^[0-9\b]+$/; // Allow numbers only
    if (value === '' || (phoneRegex.test(value) && value.length <= 10)) {
      setPhone(value);
      setPhoneError('');
    } else {
      setPhoneError('Please enter a valid 10-digit mobile number.');
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handlePincodeChange = (event) => {
    const value = event.target.value;
    const pincodeRegex = /^[0-9\b]+$/; // Allow numbers only
    if (value === '' || (pincodeRegex.test(value) && value.length <= 6)) {
      setPincode(value);
      setPincodeError('');
    } else {
      setPincodeError('Please enter a valid 6-digit pincode.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (phone.length !== 10) {
      setPhoneError('Please enter a correct 10-digit mobile number.');
      return; // Prevent form submission if phone number is invalid
    }
    if (pincode.length !== 6) {
      setPhoneError('Please enter a valid 6-digit pincode.');
      return; // Prevent form submission if phone number is invalid
    }
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
        {phoneError && <div className="error-message">{phoneError}</div>}
        {pincodeError && <div className="error-message">{pincodeError}</div>}
        {blockCodeError && <div className="error-message">{blockCodeError}</div>}
        <button type="submit" className="primary-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DoctorForms;
