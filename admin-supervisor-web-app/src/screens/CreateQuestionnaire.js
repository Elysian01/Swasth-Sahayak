import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import InputField from "../components/inputs/InputField";
import { postRequest } from "../components/Api/api";
import Modal from "react-modal"; // Import Modal
import "./css/CreateQuestionnaire.css";

function CreateQuestionnaire() {
  const location = useLocation();
  const { questionnaireName, numberOfQuestions } = location.state;
  const [questions, setQuestions] = useState(
    Array.from({ length: numberOfQuestions }, () => "")
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(""); // State to track selected question type

  const navigate = useNavigate();

  const handleQuestionChange = (index, e) => {
    const { value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postRequest("/data", {
        questionnaireName: questionnaireName,
        questions: questions,
        status: "Active",
      });
      navigate("/questionnaire-dashboard");
    } catch (error) {
      console.error("Error creating questionnaire:", error);
    }
  };

  const openModal = () => setIsOpen(true); // Function to open modal
  const closeModal = () => setIsOpen(false); // Function to close modal

  const renderQuestionFields = () => {
    return questions.map((question, index) => (
      <div className="page-style" key={index}>
        <div className="component-style">
          <InputField
            type="text"
            id={`question-${index}`}
            placeholder={`Question ${index + 1}`}
            value={question}
            onChange={(e) => handleQuestionChange(index, e)}
          />
          <div className="select-option">
            <div className="medium-primary-btn button" onClick={openModal}>
              Select Option
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value); // Update selected question type
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
      {/* Modal Component */}
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <div className="navbar">
          <h2>Select Choice</h2>
          <button onClick={closeModal}>Close Modal</button>
        </div>
        <br/>
        <select className="select-modal" onChange={handleTypeChange}>
          <option value="">Select Question Type</option>
          <option value="MCQ">MCQ</option>
          <option value="Nat">Nat</option>
          <option value="Descriptive">Descriptive</option>
        </select>
        {/* Render additional fields for MCQ type */}
        {selectedType === "MCQ" && (
          <div>
            <InputField type="text" placeholder="Option 1" />
            <InputField type="text" placeholder="Option 2" />
            <InputField type="text" placeholder="Option 3" />
            <InputField type="text" placeholder="Option 4" />
          </div>
        )}
      </Modal>
    </div>
  );
}

export default CreateQuestionnaire;
