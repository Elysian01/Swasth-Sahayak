import React, { useState } from "react";
import GradientInput from "./GradientInput";
import "../css/form.css";
import "../css/common.css";

const Supervisoraddform = ({ addsupervisor }) => {
  const [gender, setGender] = useState();
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [username, setusername] = useState();
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');



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
  
  const handleusername = (event) => {
    const value = event.target.value;
    setusername(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex pattern
    const simpleEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Regex for simple email validation
    const wrongEmailList = ['example@example.com', 'test@test.com']; // List of known wrong emails

    if (emailRegex.test(value)) {
      if (simpleEmailRegex.test(value) && !wrongEmailList.includes(value.toLowerCase())) {
        setEmailError('');
      } else {
      setEmailError('Please enter a valid email address.');

      }
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!phone ||phone.length !== 10) {
      setPhoneError('Please enter a correct 10-digit mobile number.');
      alert("Invalid data enter");
      return; // Prevent form submission if phone number is invalid
    }
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
        {phoneError && <div className="error-message">{phoneError}</div>}
        {emailError && <div className="error-message">{emailError}</div>}
        <button type="submit" className="primary-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Supervisoraddform;
