import React, { useState, useEffect } from "react";
import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import PrimaryTable from "../components/tables/PrimaryTable";
import { getRequest, putRequest, deleteRequest } from "../components/Api/api";
import viewIcon from "../static/icons/eye.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Modal from "react-modal"; // Import react-modal




function QuestionnaireDashboard() {
  const [searchedQuestionnaireName, setSearchedQuestionnaireName] =
    useState("");
  const [tableData, setTableData] = useState([]);
  const [DiseaseData, setDiaseaseData] = useState([]);
  const [filteredTableData, setFilteredTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const [selectedFieldWorker, setSelectedFieldWorker] = useState(null); // State for storing selected doctor
  const [isModalOpen, setIsModalOpen] = useState(false); // State for managing modal visibility

  function setName(e) {
    setSearchedQuestionnaireName(e.target.value);
  }
  const columns = ["Question_ID", "Questionnaire Name", "Question", "Status", "View", "Edit"];

  const fetchData = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      // Await the API call
      const response = await getRequest("/admin/allquestion", headers);
      console.log(response);
      setTableData(response);
      setFilteredTableData(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchdiseasename = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      // Await the API call
      const response = await getRequest("/admin/diseasename", headers);
      console.log(response);
      setDiaseaseData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchdiseasename();
  }, []);

  const openModal = (question) => {
    setSelectedFieldWorker(question);
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (question) => {
    navigate("/edit-question", { state: { question, DiseaseData } });
  };

  useEffect(() => {
    const filteredData = tableData.filter((row) =>
      row.icd10
        .includes(searchedQuestionnaireName)
    );
    setFilteredTableData(filteredData);
  }, [searchedQuestionnaireName, tableData]);
  const handleCreateQuestionClick = () => {
    navigate("/create-questionnaire",{ state: { DiseaseData } });
  };
  const renderViewButton = (row) => (
    <button
      className="view-button"
      onClick={() => openModal(row)}
    >
      <img src={viewIcon} alt="View" />
    </button>
  );

  const getStatusClassName = (status) => {
    if (status === 0) {
      return "status-active";
    } else if (status === 1) {
      return "status-inactive";
    }
  };

  const changeStatus = async (row) => {
    const id = row.id;
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const response = await deleteRequest(
        `/admin/deletequestion/${id}`,
        headers
      );
      fetchData();
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
          <br />
          <div style={{ width: "50%" }}>
            <select
              name="Questionnaire Name"
              value={searchedQuestionnaireName}
              onChange={setName}
              className="form__field"
            >
              <option value="">Select Questionnaire Name</option>
              {DiseaseData.map((disease, index) => (
                <option key={index} value={disease.diseasename}>
                  {disease.diseasename}
                </option>
              ))}
            </select>
          </div>

          <br />
          <button className="create-btn" onClick={handleCreateQuestionClick}>
            Create New Questionnaire
          </button>
        </div>
      </div>
      <PrimaryTable
        columns={columns}
        data={filteredTableData.map((row) => ({
          "Question_ID": row.id,
          "Questionnaire Name": row.icd10,
          Question: row.ques_text,
          Status: (
            <button
              className={getStatusClassName(row.status)}
              onClick={() => changeStatus(row)}
            >
              {row.status ? "Inactive" : "Active"}
            </button>
          ),
          "View": renderViewButton(row),
          "Edit": (
            <button
              className="dark-primary-small-btn"
              onClick={() => handleEdit(row)}
            >
              Edit
            </button>
          ),

        }))}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Question Details Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Darken the background when the modal is open
          },
          content: {
            width: "40%", // Set the width to 60% of the viewport
            height: "60%", // Automatically adjust the height based on content
            margin: "auto", // Center the modal horizontally
            padding: "25px",
            backgroundColor: "#fafafa",
            borderRadius: "10px",

            border: "none", // Remove border
          },
        }}
      >
        <div className="modal-view">
          <div className="modal-fieldworker-details">
            <h2>Question Details</h2>
            <button onClick={closeModal} className="dark-primary-small-btn">
              X
            </button>
          </div>
          {selectedFieldWorker && (
            <div className="modal-fieldworker-profile-details">
              <div className="modal-fieldworker-details">
                <div className="modal-static">-Question_ID: </div>
                <div className="modal-dynamic">{selectedFieldWorker.id}</div>
              </div>
              <div className="modal-fieldworker-details">
                <div className="modal-static">-Questionnaire Name:</div>
                <div className="modal-dynamic">
                  {selectedFieldWorker.icd10}
                </div>
              </div>
              <div className="modal-fieldworker-details">
                <div className="modal-static">-Question type:</div>
                <div className="modal-dynamic">
                  {selectedFieldWorker.type}
                </div>
              </div>
              <div className="modal-fieldworker-details">
                <div className="modal-static">-Question:</div>
                <div className="modal-dynamic">
                  {selectedFieldWorker.ques_text}
                </div>
              </div>
              {selectedFieldWorker.type === 'mcq' && (
                <>
                  <div className="modal-fieldworker-details">
                    <div className="modal-static">-Options:</div>
                  </div>
                  {selectedFieldWorker.option.map((op, index) => (
                    <div className="modal-fieldworker-details" key={index}>
                      <div className="modal-static">{index + 1}.</div>
                      <div className="modal-dynamic">
                        {op}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default QuestionnaireDashboard;
