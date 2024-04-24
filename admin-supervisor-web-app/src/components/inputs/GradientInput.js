import React from "react";
import "../css/GradientInput.css";

function GradientInput(props) {
  return (
    <div className="form__group field">
      <input
        type={props.type}
        className="form__field"
        placeholder={props.name}
        name={props.name}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
        required
        style={props.style} 
      />
      <label htmlFor={props.name} className="form__label">
        {props.name}
      </label>
    </div>
  );
}


export default GradientInput;
