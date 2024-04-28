import React, { useState } from "react";
import GradientInput from "./GradientInput";
import "../css/form.css";
import "../css/common.css";

const Supervisoraddform = ({ addsupervisor }) => {
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [username, setusername] = useState();


  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  
  const handleusername = (event) => {
    setusername(event.target.value);
  };
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a doctor object with the updated form data
    const supervisordetail = {
        supervisorid: username,
    sid:{
        name: name,
        gender: gender,
        mobileno: phone,
        }
    };
    // Call the handleEdit function with the updated doctor object
    addsupervisor(supervisordetail);
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
          name="mobile"
          placeholder="Enter your 10-digit mobile number"
          className="input-styles"
          value={phone}
          onChange={handlePhoneChange}
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

export default Supervisoraddform;
