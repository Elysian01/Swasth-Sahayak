import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import { putRequest } from "../components/Api/api";
import QuestionForm from "../components/inputs/QuestionForm";

const EditQuestion = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { question,DiseaseData } = location.state;
  console.log(question);
  const token = useSelector((state) => state.auth.token);
  const handleEdit = async (updatedQuestion) => {
    // Handle the updated FieldWorker object
    console.log("Updated FieldWorker:", updatedQuestion);
    try {
      const headers = { Authorization: `Bearer ${token}` };
      await putRequest(
        `/admin/updateQuestion/${question.id}`,
        updatedQuestion,
        headers
      );
      navigate("/questionnaire-dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <PageHeading title="Question Details"/>
      <QuestionForm handleEdit={handleEdit} question={question} DiseaseData={DiseaseData}/>
    </div>
  );
};

export default EditQuestion;
