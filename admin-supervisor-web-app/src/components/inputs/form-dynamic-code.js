import React, { useState, useEffect } from "react";
import "../css/form.css";
import "../css/common.css";

const Forms = () => {
  const [formData, setFormData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    // Fetch data from the server
    fetch("your_api_endpoint")
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
    // Submit form data to the server
    const dataToSend = {
      selectedDate,
      gender,
      email,
      phone,
      // Add other form data here based on your requirements
    };
    console.log("Form data to be sent:", dataToSend);
    // Perform fetch or other API call to send data to the server
  };

  if (!formData) return <div>Loading...</div>;

  return (
    <div>
      <form className="form-style" onSubmit={handleSubmit}>
        {formData.fields.map((field) => (
          <div key={field.name} className="form-field">
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === "text" && (
              <input
                type="text"
                name={field.name}
                placeholder={field.placeholder}
                className="input-styles"
                value={field.name === "emailAddress" ? email : phone}
                onChange={field.name === "emailAddress" ? handleEmailChange : handlePhoneChange}
              />
            )}
            {field.type === "date" && (
              <input
                type="date"
                name={field.name}
                value={selectedDate}
                onChange={handleDateChange}
                className="input-styles date-picker"
              />
            )}
            {field.type === "select" && (
              <select
                name={field.name}
                value={gender}
                onChange={handleGenderChange}
                className="input-styles"
              >
                <option value="">{field.placeholder}</option>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
        <button type="submit" className="primary-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
