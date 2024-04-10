import React from "react";
import "../css/GradientInput.css";

function GradientInput(props) {
  return (
    <div class="form__group field">
      <input
        type="input"
        class="form__field"
        placeholder={props.name}
        name={props.name}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
        required
      />
      <label for="name" class="form__label">
        {props.name}
      </label>
    </div>
  );
}

export default GradientInput;
