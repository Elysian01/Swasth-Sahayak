import React, { useState } from "react";
import GradientInput from "../inputs/GradientInput";

function MCQOptions({ options, onChange }) {
  const handleAddOption = () => {
    onChange([...options, ""]); // Add a new option to the options array
  };

  const handleOptionChange = (index, e) => {
    const updatedOptions = [...options];
    updatedOptions[index] = e.target.value;
    onChange(updatedOptions); // Update the options array with the modified option
  };

  return (
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <GradientInput
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e)}
          />
        </div>
      ))}
      <button onClick={handleAddOption} className="small-primary-btn">+</button>
    </div>
  );
}

export default MCQOptions;
