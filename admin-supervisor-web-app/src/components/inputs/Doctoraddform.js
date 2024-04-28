import React, { useState } from "react";
import GradientInput from "./GradientInput";
import "../css/form.css";
import "../css/common.css";

const Doctoraddform = ({ adddoctor }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [pincode, setPincode] = useState();
  const [blockCode, setBlockCode] = useState();
  const [specialization, setspecialization] = useState();
  const [countofpatient, setcountofpatient] = useState();
  const [username, setusername] = useState();
  
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
  const handlecountofpatient = (event) => {
    setcountofpatient(event.target.value);
  };
  const handleusername = (event) => {
    setusername(event.target.value);
  };
  const handlespecialization = (event) => {
    setspecialization(event.target.value);
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
    const Doctordetail = {
      username: username,
      did:{
        name: name,
        gender: gender,
        mobileno: phone,
        specialization: specialization,
        workingaddress: address,
        blockCode: blockCode,
        countofpatient: countofpatient,
        dateofjoining: selectedDate,
        pincode: pincode,
        }
    };
    // Call the handleEdit function with the updated doctor object
    adddoctor(Doctordetail);
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
        <GradientInput
          type="text"
          name="Input patient count for diagnosis"
          placeholder="Input patient count for diagnosis"
          className="input-styles"
          value={countofpatient}
          onChange={handlecountofpatient}
        />
        <GradientInput
          type="text"
          name="Specialization"
          placeholder="Specialization"
          className="input-styles"
          value={specialization}
          onChange={handlespecialization}
        />
        <GradientInput
          type="text"
          name="Email-ID"
          placeholder="Email-ID"
          className="input-styles"
          value={username}
          onChange={handleusername}
        />
        <button type="submit" className="primary-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Doctoraddform;
