import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import InputField from "../components/inputs/InputField";
import { postRequest } from "../components/Api/api";

function CreateQuestionnaire() {
  const location = useLocation();
  const { questionnaireName, numberOfQuestions } = location.state;
  const [questions, setQuestions] = useState(
    Array.from({ length: numberOfQuestions }, () => "")
  );
  const navigate = useNavigate();
  // Function to handle input change for each question
  const handleQuestionChange = (index, e) => {
    const { value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send questionnaire data to the server
      const response = await postRequest("/data", {
        questionnaireName: questionnaireName,
        questions: questions,
        status: "Active", // Assuming a static status for now
      });
      navigate("/questionnaire-dashboard");
    } catch (error) {
      console.error("Error creating questionnaire:", error);
    }
  };

  // Function to render input fields based on the number of questions
  const renderQuestionFields = () => {
    return questions.map((question, index) => (
      <InputField
        key={index}
        type="text"
        id={`question-${index}`}
        placeholder={`Question ${index + 1}`}
        value={question}
        onChange={(e) => handleQuestionChange(index, e)}
      />
    ));
  };

  return (
    <div>
      <Navbar />
      <PageHeading title={`Create Questionnaire: ${questionnaireName}`} />
      <div className="container">
        {/* Form for creating questionnaire */}
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {/* Render input fields for each question */}
          {renderQuestionFields()}

          {/* Submit button */}
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
