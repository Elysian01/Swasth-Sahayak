import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import InputField from "../components/inputs/InputField";

function QuestionnaireConfigurations() {
  const navigate = useNavigate();
  const [questionnaireName, setQuestionnaireName] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState("");

  function configurationsSubmitted() {
    if (questionnaireName.trim() === "" || numberOfQuestions.trim() === "") {
      // If either field is empty, do not navigate
      return;
    }
    navigate("/create-questionnaire", {
      state: {
        questionnaireName: questionnaireName,
        numberOfQuestions: numberOfQuestions,
      },
    });
  }

  return (
    <div>
      <Navbar />
      <PageHeading title="Questionnaire Configurations" />
      <div className="container">
        <InputField
          type="text"
          placeholder="Enter Questionnaire Name"
          value={questionnaireName}
          onChange={(e) => setQuestionnaireName(e.target.value)}
          required
        />
        <InputField
          type="number"
          placeholder="Enter Number of Questions"
          value={numberOfQuestions}
          onChange={(e) => setNumberOfQuestions(e.target.value)}
          required
        />
        <button
          onClick={configurationsSubmitted}
          className="medium-primary-btn"
        >
          Create Questionnaire
        </button>
      </div>
    </div>
  );
}

export default QuestionnaireConfigurations;
