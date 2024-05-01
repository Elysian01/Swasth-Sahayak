import React, { useState } from "react";
import GradientInput from "./GradientInput";
import "../css/form.css";
import "../css/common.css";
import { type } from "@testing-library/user-event/dist/type";

const QuestionForms = ({ handleEdit, question,DiseaseData }) => {
    const [questionnaireName, setquestionnaireName] = useState(question.icd10);
    const [Question, setQuestion] = useState(question.ques_text);
    const [option, setoption] = useState(question.option);
    console.log(questionnaireName)

    const handleDateChange = (event) => {
        setquestionnaireName(event.target.value);
    };


    const handleAddressChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleOptionChange = (index, event) => {
        const newOptions = [...option]; // Create a copy of the options array
        newOptions[index] = event.target.value; // Update the option at the specified index
        setoption(newOptions); // Set the new options array
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Create a doctor object with the updated form data
        const updatedquestion = {
            icd10: questionnaireName,
            ques_text: Question,
            options: option,
            type:question.type,
        };
        // Call the handleEdit function with the updated doctor object
        handleEdit(updatedquestion);
    };

    return (
        <div>
            <form className="form-style" onSubmit={handleSubmit}>


          <div style={{ width: "50%" }}>
            <select
              name="Questionnaire Name"
              value={questionnaireName}
              onChange={handleDateChange}
              className="form__field"
            >
              {DiseaseData.map((disease, index) => (
                <option key={index} value={disease.icd10}>
                  {disease.diseasename}
                </option>
              ))}
            </select>
          </div>


                <GradientInput
                    type="text"
                    name="Question"
                    placeholder="Question"
                    className="input-styles"
                    value={Question}
                    onChange={handleAddressChange}
                />
                {
                    question.type === "mcq" && (
                        question.option.map((op, index) => (
                            <GradientInput
                                key={index} // Add a key for each input for React's reconciliation
                                type="text"
                                name={`option-${index}`}
                                placeholder="Option"
                                className="input-styles"
                                value={option[index]}
                                onChange={(event) => handleOptionChange(index, event)}
                            />
                        ))
                    )
                }

                <button type="submit" className="primary-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default QuestionForms;
