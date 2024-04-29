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
  const [phoneError, setPhoneError] = useState('');
  const [pincodeError, setPincodeError] = useState('');
  const [blockCodeError, setBlockCodeError] = useState('');
  const [countofpatientError, setcountofpatientError] = useState('');
  const [emailError, setEmailError] = useState('');
  
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
  const handlecountofpatient = (event) => {
    const value = event.target.value;
    const blockCodeRegex = /^[0-9]+$/; // Allow alphanumeric characters
    if (value === '' || (blockCodeRegex.test(value))) {
      setcountofpatient(value);
      setcountofpatientError('');
    } else {
      setcountofpatientError('Please enter the number.');
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
    if (!phone ||phone.length !== 10) {
      setPhoneError('Please enter a correct 10-digit mobile number.');
      alert("Invalid data enter");
      return; // Prevent form submission if phone number is invalid
    }
    
    if (!pincode ||pincode.length !== 6) {
      setPhoneError('Please enter a valid 6-digit pincode.');
      alert("Invalid data enter");
      return; // Prevent form submission if phone number is invalid
    }
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
        {phoneError && <div className="error-message">{phoneError}</div>}
        {pincodeError && <div className="error-message">{pincodeError}</div>}
        {blockCodeError && <div className="error-message">{blockCodeError}</div>}
        {emailError && <div className="error-message">{emailError}</div>}
        {countofpatientError && <div className="error-message">{countofpatientError}</div>}
        <button type="submit" className="primary-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Doctoraddform;
