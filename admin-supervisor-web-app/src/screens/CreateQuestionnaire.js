import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import GradientInput from "../components/inputs/GradientInput";
import MCQOptions from "../components/misc/MCQOptions";
import axios from "axios";
import "./css/CreateQuestionnaire.css";

const generateRandomId = () => {
  return Math.floor(Math.random() * 90000) + (10000).toString(36);
};

function CreateQuestionnaire() {
  const [questionnaireName, setQuestionnaireName] = useState("");
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  const handleQuestionnaireNameChange = (e) => {
    setQuestionnaireName(e.target.value);
  };

  const addQuestion = () => {
    setQuestions([...questions, { id: generateRandomId(), value: "", selectedType: "", options: [] }]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

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
    updatedQuestions[index].options = []; // Reset options when type changes
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (index, newOptions) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options = newOptions;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedQuestions = questions.map((question) => ({
      question_text: question.value,
      option: question.options,
      ques_type: question.selectedType,
    }));

    const dataToLog = {
      id: generateRandomId(),
      icd10: "ACTIVITY",
      questionnaireName: questionnaireName,
      status: "Active",
      questions: formattedQuestions,
    };

    try {
      console.log("Submitted Data:", dataToLog);
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

          <select
            className="form__field "
            onChange={(e) => handleTypeChange(index, e)}
          >
            <option>Select Question Type</option>
            <option value="MCQ">MCQ</option>
            <option value="NAT">NAT</option>
            <option value="Descriptive">Descriptive</option>
          </select>

          {questions.length > 1 && (
            <button
              type="button"
              onClick={() => removeQuestion(index)}
              className="pink-btn"
            >
              Remove
            </button>
          )}

          {question.selectedType === "MCQ" && (
            <MCQOptions
              options={question.options}
              onChange={(newOptions) => handleOptionChange(index, newOptions)}
            />
          )}
        </div>
      </div>
    ));
  };

  return (
    <div>
      <Navbar />
      <PageHeading title="Create Questionnaire" />

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", padding: "40px" }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <GradientInput
            type="text"
            placeholder="Enter Questionnaire Name"
            name="Enter Questionnaire Name"
            value={questionnaireName}
            onChange={handleQuestionnaireNameChange}
          />
        </div>

        {renderQuestionFields()}
        <button
          type="button"
          onClick={addQuestion}
          className="medium-primary-btn"
          style={{ width: "20%", alignSelf: "center" }}
        >
          Add Question
        </button>

        <button
          type="submit"
          className="medium-primary-btn"
          style={{ width: "20%", alignSelf: "center" }}
        >
          Create Questionnaire
        </button>
      </form>
    </div>
  );
}

export default CreateQuestionnaire;
