import React from "react";
import Navbar from "../components/headers/Navbar";
import { useLocation } from "react-router-dom";
import PageHeading from "../components/headers/PageHeading";
import PrimaryTable from "../components/tables/PrimaryTable";

const ViewQuestionnaire = () => {
  const location = useLocation();
  const questionnaireData = location.state.questionnaireData;
  const columns = ["Questions"];

  // Add the list of questions to the data array
  const data = questionnaireData.questions.map((question, index) => ({
    Questions: question,
    key: index, // Add a unique key for each row
  }));

  return (
    <div>
      <Navbar />
      <PageHeading title={questionnaireData.questionnaireName} />
      <PrimaryTable columns={columns} data={data} />
    </div>
  );
};

export default ViewQuestionnaire;
