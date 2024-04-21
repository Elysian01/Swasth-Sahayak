import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import InputField from "../components/inputs/InputField";
import GradientInput from "../components/inputs/GradientInput";
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
        <GradientInput
          type="name"
          name="Enter Questionnaire Name"
          value={questionnaireName}
          onChange={(e) => setQuestionnaireName(e.target.value)}
          required
        />
        <br/>
        <GradientInput
          type="number"
          name="Enter Number of Questions"
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
