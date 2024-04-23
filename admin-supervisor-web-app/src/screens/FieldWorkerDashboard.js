import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal"; // Import react-modal
import { useNavigate } from "react-router-dom";

import Navbar from "../components/headers/Navbar";
import PageHeading from "../components/headers/PageHeading";
import { getRequest } from "../components/Api/api";
import GradientInput from "../components/inputs/GradientInput";

import "../components/css/common.css";
import "./css/field-worker-dashboard.css";

function FieldWorkerDashboard() {
  const [FieldWorkerDetails, setFieldWorkerDetails] = useState([]); // State for storing doctor details array
  const [selectedFieldWorker, setSelectedFieldWorker] = useState(null); // State for storing selected doctor
  const [isModalOpen, setIsModalOpen] = useState(false); // State for managing modal visibility
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const filteredFieldWorkers = FieldWorkerDetails.filter((fieldworker) => {
    const nameMatch = fieldworker.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return nameMatch ;
  });

  useEffect(() => {
    const fetchFieldWorkerDetails = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        // Await the API call
        const response = await getRequest(
          "/admin/allfieldworkerDetail",
          headers
        );
        // Update the state with the fetched doctor details
        setFieldWorkerDetails(response);
      } catch (error) {
        console.error(error);
      }
    };
    // Call the fetchDoctorDetails function
    fetchFieldWorkerDetails();
  }, []);
  // Function to handle opening the modal
  const openModal = (fieldworker) => {
    setSelectedFieldWorker(fieldworker);
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleEdit = (fieldworker) => {
    navigate("/edit-field-worker", { state: { fieldworker } });
  };
  return (
    <div>
      <Navbar />
      <PageHeading title="Field Worker Dashboard" />
      <div className="dropdown-container">
        <GradientInput
          type="text"
          placeholder="Search by Name"
          name="Search by Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="small-primary-btn">Add New Field Worker</button>
      </div>
      <div className="view-pane">
        {filteredFieldWorkers.map((fieldworker, index) => (
          <div className="display-card" key={index}>
            <div className="person-details">
              <div className="person-name">Name: {fieldworker.name}</div>
              <div className="person-region">
                Field Worker ID: {fieldworker.fieldworkerid}
              </div>
              <div className="person-specialisation">
                Gender: {fieldworker.gender}
              </div>
            </div>
            <div className="button-alignment">
              <button
                className="dark-primary-small-btn"
                onClick={() => openModal(fieldworker)}
              >
                View
              </button>
              <button
                onClick={() => handleEdit(fieldworker)}
                className="dark-primary-small-btn"
              >
                Edit
              </button>
              <button className="pink-btn">Inactive</button>
            </div>
          </div>
        ))}
      </div>
      {/* Use react-modal for the modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Doctor Details Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Darken the background when the modal is open
          },
          content: {
            width: "30%", // Set the width to 60% of the viewport
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
            <h2>Field Worker Details</h2>
            <button onClick={closeModal} className="dark-primary-small-btn">
              X
            </button>
          </div>
          {selectedFieldWorker && (
            <div className="modal-fieldworker-profile-details">
              <div className="modal-fieldworker-details">
                <div className="modal-static">-Name: </div>
                <div className="modal-dynamic">{selectedFieldWorker.name}</div>
              </div>
              <div className="modal-fieldworker-details">
                <div className="modal-static">-Gender:</div>
                <div className="modal-dynamic">
                  {selectedFieldWorker.gender}
                </div>
              </div>
              <div className="modal-fieldworker-details">
                <div className="modal-static">-Mobile No:</div>
                <div className="modal-dynamic">
                  {selectedFieldWorker.mobileno}
                </div>
              </div>
              <div className="modal-fieldworker-details">
                <div className="modal-static">-Fieldworker ID:</div>
                <div className="modal-dynamic">
                  {selectedFieldWorker.fieldworkerid}
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default FieldWorkerDashboard;
