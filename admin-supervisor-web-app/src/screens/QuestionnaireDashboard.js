import React, { useState, useEffect } from "react";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import PrimaryTable from "../components/tables/PrimaryTable";
import GradientInput from "../components/inputs/GradientInput";
import { getRequest, putRequest } from "../components/Api/api";
import viewIcon from "../static/icons/eye.png";
import { useNavigate } from "react-router-dom";

function QuestionnaireDashboard() {
  const [searchedQuestionnaireName, setSearchedQuestionnaireName] =
    useState("");
  const [tableData, setTableData] = useState([]);
  const [filteredTableData, setFilteredTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  function setName(e) {
    setSearchedQuestionnaireName(e.target.value);
  }

  const columns = ["ID", "Questionnaire Name", "Status", "View Questionnaire"];

  const fetchData = async () => {
    try {
      const response = await getRequest("/data");
      setTableData(response);
      setFilteredTableData(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = tableData.filter((row) =>
      row.questionnaireName
        .toLowerCase()
        .includes(searchedQuestionnaireName.toLowerCase())
    );
    setFilteredTableData(filteredData);
  }, [searchedQuestionnaireName, tableData]);
  const handleCreateQuestionClick = () => {
    navigate("/questionnaire-configurations");
  };
  const renderViewButton = (viewUrl) => (
    <button className="view-button">
      <img src={viewIcon} alt="View" />
    </button>
  );

  const getStatusClassName = (status) => {
    if (status === "Active") {
      return "status-active";
    } else if (status === "Inactive") {
      return "status-inactive";
    }
  };

  const changeStatus = async (row) => {
    const newStatus = row.status === "Active" ? "Inactive" : "Active";
    try {
      await putRequest(`/data/${row.id}`, {
        ...row,
        status: newStatus,
      });
      setTableData((prevData) =>
        prevData.map((prevRow) => {
          if (prevRow.id === row.id) {
            return { ...prevRow, status: newStatus };
          }
          return prevRow;
        })
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <PageHeading title="Questionnaire Dashboard" />
      <div className="container">
        <div className="search">
          <GradientInput
            name="Questionnaire Name"
            onChange={setName}
            value={searchedQuestionnaireName}
          />
          <button className="create-btn" onClick={handleCreateQuestionClick}>Create New Questionnaire</button>
        </div>
      </div>
      <PrimaryTable
        columns={columns}
        data={filteredTableData.map((row) => ({
          ID: row.id,
          "Questionnaire Name": row.questionnaireName,
          Status: (
            <button
              className={getStatusClassName(row.status)}
              onClick={() => changeStatus(row)}
            >
              {row.status}
            </button>
          ),
          Disease: row.disease,
          "View Questionnaire": renderViewButton(row.view),
        }))}
      />
    </div>
  );
}

export default QuestionnaireDashboard;
