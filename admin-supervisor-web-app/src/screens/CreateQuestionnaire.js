import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import GradientInput from "../components/inputs/GradientInput";
import MCQOptions from "../components/misc/MCQOptions";
import axios from "axios";
import "./css/CreateQuestionnaire.css";
import { useSelector } from "react-redux";
import { postRequest } from "../components/Api/api";


const generateRandomId = () => {
  return Math.floor(Math.random() * 90000) + (10000).toString(36);
};

function CreateQuestionnaire() {
  const location = useLocation();

  const [questionnaireName, setQuestionnaireName] = useState("");
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const { DiseaseData } = location.state;



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
      ques_text: question.value,
      options: question.options,
      type: question.selectedType,
    }));

    const dataToLog = {
      icd10: questionnaireName,
      question: formattedQuestions,
    };

    try {
      console.log(dataToLog)
      const headers = { Authorization: `Bearer ${token}` };
      await postRequest(
        `/admin/addquestion`,
        dataToLog,
        headers
      );
      // console.log("Submitted Data:", dataToLog);
      // await axios.post(`http://localhost:9192/data`, dataToLog);
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
            <option value="mcq">MCQ</option>
            <option value="nat">NAT</option>
            <option value="descriptive">Descriptive</option>
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

          {question.selectedType === "mcq" && (
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
      <PageHeading title="Create Question" />

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", padding: "40px" }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>

          <div style={{ width: "50%" }}>
            <select
              name="Questionnaire Name"
              value={questionnaireName}
              onChange={handleQuestionnaireNameChange}
              className="form__field"
            >
              <option value="">Select Questionnaire Name</option>
              {DiseaseData.map((disease, index) => (
                <option key={index} value={disease.icd10}>
                  {disease.diseasename}
                </option>
              ))}
            </select>
          </div>
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
          Create Question
        </button>
      </form>
    </div>
  );
}

export default CreateQuestionnaire;
