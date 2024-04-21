import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import "./css/CreateQuestionnaire.css";
import GradientInput from "../components/inputs/GradientInput";
import MCQOptions from "../components/misc/MCQOptions";
import axios from "axios";

const generateRandomId = () => {
  return Math.floor(Math.random() * 90000) + (10000).toString(36);
};
function CreateQuestionnaire() {
  const location = useLocation();
  const { questionnaireName, numberOfQuestions } = location.state;
  const [questions, setQuestions] = useState(
    Array.from({ length: numberOfQuestions }, () => ({
      value: "",
      selectedType: "",
      options: [],
    }))
  );
  const id = generateRandomId();
  const navigate = useNavigate();

  const handleQuestionChange = (index, e) => {
    const { value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index].value = value;
    setQuestions(updatedQuestions);
  };

  const handleTypeChange = (index, e) => {
    const { value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index].selectedType = value;
    // Reset options when type changes
    updatedQuestions[index].options = [];
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (index, newOptions) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options = newOptions;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format the questions data
    const formattedQuestions = questions.map((question) => ({
      question_text: question.value,
      option: question.options,
      ques_type: question.selectedType,
    }));

    // Prepare the data to be sent in the PUT request
    const dataToLog = {
      id:id,
      icd10: "ACTIVITY",
      questionnaireName: questionnaireName,
      status: "Active",
      questions: formattedQuestions,
    };

    try {
      // Log the data to be submitted
      console.log("Submitted Data:", dataToLog);

      // Send the PUT request to the backend API
      await axios.post(`http://localhost:9192/data`, dataToLog);
      navigate("/questionnaire-dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const renderQuestionFields = () => {
    return questions.map((question, index) => (
      <div className="page-style" key={index}>
        <div className="component-style">
          <GradientInput
            type="text"
            id={`question-${index}`}
            name={`Question ${index + 1}`}
            value={question.value}
            onChange={(e) => handleQuestionChange(index, e)}
            style={{ width: "700px" }}
          />

          <div className="select-option">
            <select
              className="select-option"
              onChange={(e) => handleTypeChange(index, e)}
            >
              <option>Select Question Type</option>
              <option value="MCQ">MCQ</option>
              <option value="NAT">NAT</option>
              <option value="Descriptive">Descriptive</option>
            </select>
          </div>
        </div>
        {/* Render MCQOptions component conditionally */}
        {question.selectedType === "MCQ" && (
          <MCQOptions
            options={question.options}
            onChange={(newOptions) => handleOptionChange(index, newOptions)}
          />
        )}
      </div>
    ));
  };

  return (
    <div>
      <Navbar />
      <PageHeading title={`Create Questionnaire: ${questionnaireName}`} />
      <div className="container">
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {renderQuestionFields()}
          <button
            type="submit"
            className="medium-primary-btn"
            style={{ width: "70%", alignSelf: "center" }}
          >
            Create Questionnaire
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateQuestionnaire;
